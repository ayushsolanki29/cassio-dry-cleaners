<?php
require_once dirname(__DIR__) . '/config.php';

// Get contact ID from CLI argv or GET request parameter
$contactId = '';
$debug = false;

if (php_sapi_name() === 'cli') {
    $contactId = $argv[1] ?? '';
} else {
    $contactId = $_GET['id'] ?? '';
    $debug = isset($_GET['debug']) && $_GET['debug'] == 1;
    
    // Close connection immediately to execute asynchronously for web clients (unless debugging)
    if (!$debug) {
        if (function_exists('fastcgi_finish_request')) {
            fastcgi_finish_request();
        } else {
            header("Connection: close");
            header("Content-Length: 0");
            if (ob_get_level() > 0) {
                ob_end_clean();
            }
            flush();
        }
    }
}

$vendorAutoload = dirname(__DIR__) . '/vendor/autoload.php';
if (!file_exists($vendorAutoload)) {
    error_log("PHPMailer autoload file not found. Run setup.php first.");
    exit;
}
require_once $vendorAutoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (empty($contactId)) {
    error_log("Missing contact ID in background job.");
    exit;
}

$db = getDbConnection();

// 1. Fetch the pending or failed job for this contact
try {
    $stmtJob = $db->prepare("SELECT * FROM email_jobs WHERE contact_id = :contact_id AND status IN ('pending', 'failed') LIMIT 1");
    $stmtJob->execute([':contact_id' => $contactId]);
    $job = $stmtJob->fetch();
} catch (PDOException $e) {
    error_log("Database error fetching job: " . $e->getMessage());
    exit;
}

if (!$job) {
    error_log("No pending or retryable job found for contact: {$contactId}");
    exit;
}

// 2. Mark job as processing and increment attempts
$attempts = (int)$job['attempts'] + 1;
try {
    $stmtUpdate = $db->prepare("UPDATE email_jobs SET status = 'processing', attempts = :attempts WHERE id = :id");
    $stmtUpdate->execute([':attempts' => $attempts, ':id' => $job['id']]);
} catch (PDOException $e) {
    error_log("Database error updating job status to processing: " . $e->getMessage());
    exit;
}

// 3. Fetch contact details
try {
    $stmtContact = $db->prepare("SELECT * FROM contacts WHERE id = :id");
    $stmtContact->execute([':id' => $contactId]);
    $contact = $stmtContact->fetch();
} catch (PDOException $e) {
    error_log("Database error fetching contact details: " . $e->getMessage());
    exit;
}

if (!$contact) {
    // If contact doesn't exist, fail the job
    $stmtUpdate = $db->prepare("UPDATE email_jobs SET status = 'failed', error_message = 'Contact record not found' WHERE id = :id");
    $stmtUpdate->execute([':id' => $job['id']]);
    exit;
}

$name    = $contact['name'];
$email   = $contact['email'];
$phone   = $contact['phone'] ?: 'Not provided';
$service = $contact['service'];
$message = $contact['message'];

$successAdmin = false;
$successUser = false;
$lastError = '';

function renderTemplate($templatePath, $data) {
    if (!file_exists($templatePath)) return '';
    $template = file_get_contents($templatePath);
    foreach ($data as $key => $value) {
        $template = str_replace('{{{' . $key . '}}}', nl2br(htmlspecialchars((string)$value)), $template);
    }
    foreach ($data as $key => $value) {
        $template = str_replace('{{' . $key . '}}', htmlspecialchars((string)$value), $template);
    }
    return $template;
}

function sendEmail($toEmail, $toName, $subject, $bodyHtml, $bodyAlt, $replyToEmail = null, $replyToName = null) {
    global $debug;
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->isSMTP();
        if ($debug) {
            $mail->SMTPDebug = 3;
            $mail->Debugoutput = 'echo';
        }
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = SMTP_SECURE;
        $mail->Port       = SMTP_PORT;

        $mail->setFrom(SMTP_USER, 'Cassio Dry Cleaners');
        $mail->addAddress($toEmail, $toName);
        if ($replyToEmail) {
            $mail->addReplyTo($replyToEmail, $replyToName);
        }

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $bodyHtml;
        $mail->AltBody = $bodyAlt;
        
        $mail->send();
        return ['success' => true, 'error' => ''];
    } catch (\Exception $e) {
        return ['success' => false, 'error' => $mail->ErrorInfo];
    }
}

$templateData = [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'service' => $service,
    'message' => $message
];

/* ───────────────────────────────────────────────────────────
   1. SEND EMAIL TO ADMIN (MODERN PREMIUM EDITORIAL DESIGN)
   ─────────────────────────────────────────────────────────── */
$adminHtml = renderTemplate(__DIR__ . '/templates/admin_email.html', $templateData);
$adminAlt = "New Service Inquiry Received\n\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\nMessage:\n{$message}";

$adminResult = sendEmail(
    NOTIFICATION_EMAIL,
    'Cassio Admin',
    'New Contact Submission - ' . $name,
    $adminHtml,
    $adminAlt,
    $email,
    $name
);
$successAdmin = $adminResult['success'];
if (!$successAdmin) {
    $lastError .= "Admin Email Error: " . $adminResult['error'] . " | ";
}

/* ───────────────────────────────────────────────────────────
   2. SEND CONFIRMATION EMAIL TO USER (MIND-BLOWING MODERN DESIGN)
   ─────────────────────────────────────────────────────────── */
$userHtml = renderTemplate(__DIR__ . '/templates/user_email.html', $templateData);
$userAlt = "Dear {$name},\n\nThank you for reaching out to Cassio Dry Cleaners. We have received your inquiry for {$service} and will get back to you within 2 hours.\n\nMessage submitted:\n{$message}\n\nBest regards,\nCassio Dry Cleaners Team";

$userResult = sendEmail(
    $email,
    $name,
    'We have received your service request',
    $userHtml,
    $userAlt,
    NOTIFICATION_EMAIL,
    'Cassio Dry Cleaners'
);
$successUser = $userResult['success'];
if (!$successUser) {
    $lastError .= "User Email Error: " . $userResult['error'] . " | ";
}

// 4. Update the DB job status based on results
if ($successAdmin && $successUser) {
    try {
        $stmtDone = $db->prepare("UPDATE email_jobs SET status = 'sent', error_message = NULL WHERE id = :id");
        $stmtDone->execute([':id' => $job['id']]);
    } catch (PDOException $e) {
        error_log("Database error marking job complete: " . $e->getMessage());
    }
} else {
    try {
        $stmtFail = $db->prepare("UPDATE email_jobs SET status = 'failed', error_message = :err WHERE id = :id");
        $stmtFail->execute([':err' => rtrim($lastError, ' | '), ':id' => $job['id']]);
    } catch (PDOException $e) {
        error_log("Database error marking job failed: " . $e->getMessage());
    }
}

if ($debug) {
    echo "\n=== DEBUG RESULTS ===\n";
    echo "Admin Email Sent: " . ($successAdmin ? "SUCCESS" : "FAILED") . "\n";
    echo "User Email Sent: " . ($successUser ? "SUCCESS" : "FAILED") . "\n";
    if ($lastError) {
        echo "Error Logs: " . $lastError . "\n";
    }
}
