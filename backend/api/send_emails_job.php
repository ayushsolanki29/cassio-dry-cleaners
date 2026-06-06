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

/* ───────────────────────────────────────────────────────────
   1. SEND EMAIL TO ADMIN (MODERN PREMIUM EDITORIAL DESIGN)
   ─────────────────────────────────────────────────────────── */
$adminMail = new PHPMailer(true);
try {
    $adminMail->isSMTP();
    if ($debug) {
        $adminMail->SMTPDebug = 3;
        $adminMail->Debugoutput = 'echo';
    }
    $adminMail->Host       = SMTP_HOST;
    $adminMail->SMTPAuth   = true;
    $adminMail->Username   = SMTP_USER;
    $adminMail->Password   = SMTP_PASS;
    $adminMail->SMTPSecure = SMTP_SECURE;
    $adminMail->Port       = SMTP_PORT;

    $adminMail->setFrom(SMTP_USER, 'Cassio Dry Cleaners Backend');
    $adminMail->addAddress(NOTIFICATION_EMAIL);
    $adminMail->addReplyTo($email, $name);

    $adminMail->isHTML(true);
    $adminMail->Subject = 'New Contact Submission - ' . $name;
    
    $adminMail->Body = "
        <div style=\"font-family: 'Outfit', 'Inter', 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;\">
            <div style=\"max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e2e8f0;\">
                <!-- Header Brand Strip -->
                <div style=\"background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 35px; text-align: center; color: #ffffff;\">
                    <span style=\"font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; opacity: 0.85;\">Admin Notification</span>
                    <h1 style=\"margin: 10px 0 0 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;\">New Inquiry Received</h1>
                </div>
                
                <!-- Info Cards -->
                <div style=\"padding: 40px 30px;\">
                    <p style=\"font-size: 16px; line-height: 1.6; color: #64748b; margin-top: 0;\">
                        A client has submitted a new inquiry from the Cassio Dry Cleaners contact form. Here are the submission details:
                    </p>
                    
                    <table style=\"width: 100%; border-collapse: collapse; margin-top: 25px;\">
                        <tr>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 140px; font-weight: 600; color: #475569;\">Client Name</td>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;\">" . htmlspecialchars($name) . "</td>
                        </tr>
                        <tr>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;\">Email Address</td>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 500;\">
                                <a href=\"mailto:" . htmlspecialchars($email) . "\" style=\"color: #4f46e5; text-decoration: none;\">" . htmlspecialchars($email) . "</a>
                            </td>
                        </tr>
                        <tr>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;\">Phone Number</td>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;\">" . htmlspecialchars($phone) . "</td>
                        </tr>
                        <tr>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;\">Service</td>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9;\">
                                <span style=\"background-color: #f1f5f9; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; color: #0f172a; border: 1px solid #e2e8f0; display: inline-block;\">
                                    " . htmlspecialchars($service) . "
                                </span>
                            </td>
                        </tr>
                    </table>

                    <div style=\"margin-top: 35px;\">
                        <span style=\"font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;\">Client Message</span>
                        <div style=\"margin-top: 10px; background-color: #f8fafc; padding: 20px 25px; border-radius: 16px; border-left: 4px solid #7c3aed; color: #334155; line-height: 1.7; font-size: 15px;\">
                            \"" . nl2br(htmlspecialchars($message)) . "\"
                        </div>
                    </div>
                </div>
                
                <div style=\"background-color: #f8fafc; padding: 25px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;\">
                    Cassio Dry Cleaners Admin System &bull; Automatic Job Queue Notification
                </div>
            </div>
        </div>
    ";
    
    $adminMail->AltBody = "New Service Inquiry Received\n\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\nMessage:\n{$message}";
    $adminMail->send();
    $successAdmin = true;
} catch (Exception $e) {
    $lastError .= "Admin Email Error: " . $adminMail->ErrorInfo . " | ";
}

/* ───────────────────────────────────────────────────────────
   2. SEND CONFIRMATION EMAIL TO USER (MIND-BLOWING MODERN DESIGN)
   ─────────────────────────────────────────────────────────── */
$userMail = new PHPMailer(true);
try {
    $userMail->isSMTP();
    if ($debug) {
        $userMail->SMTPDebug = 3;
        $userMail->Debugoutput = 'echo';
    }
    $userMail->Host       = SMTP_HOST;
    $userMail->SMTPAuth   = true;
    $userMail->Username   = SMTP_USER;
    $userMail->Password   = SMTP_PASS;
    $userMail->SMTPSecure = SMTP_SECURE;
    $userMail->Port       = SMTP_PORT;

    $userMail->setFrom(SMTP_USER, 'Cassio Dry Cleaners');
    $userMail->addAddress($email, $name);

    $userMail->isHTML(true);
    $userMail->Subject = 'We have received your service request';
    
    $userMail->Body = "
        <div style=\"font-family: 'Outfit', 'Inter', 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;\">
            <div style=\"max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e2e8f0;\">
                <!-- Header Brand Strip -->
                <div style=\"background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 35px; text-align: center; color: #ffffff;\">
                    <span style=\"font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; opacity: 0.85;\">Inquiry Confirmation</span>
                    <h1 style=\"margin: 10px 0 0 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;\">Cassio Dry Cleaners</h1>
                </div>
                
                <!-- Info Cards -->
                <div style=\"padding: 40px 30px;\">
                    <p style=\"font-size: 16px; line-height: 1.6; color: #64748b; margin-top: 0;\">
                        Dear <strong>" . htmlspecialchars($name) . "</strong>,<br><br>
                        Thank you for choosing Cassio Dry Cleaners! We have successfully received your service inquiry. Our team will review your details and get back to you within 2 hours to confirm your booking.
                    </p>
                    
                    <table style=\"width: 100%; border-collapse: collapse; margin-top: 25px;\">
                        <tr>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 140px; font-weight: 600; color: #475569;\">Service Requested</td>
                            <td style=\"padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;\">
                                <span style=\"background-color: #f1f5f9; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; color: #0f172a; border: 1px solid #e2e8f0; display: inline-block;\">
                                    " . htmlspecialchars($service) . "
                                </span>
                            </td>
                        </tr>
                    </table>

                    <div style=\"margin-top: 35px;\">
                        <span style=\"font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;\">Your Message</span>
                        <div style=\"margin-top: 10px; background-color: #f8fafc; padding: 20px 25px; border-radius: 16px; border-left: 4px solid #7c3aed; color: #334155; line-height: 1.7; font-size: 15px;\">
                            \"" . nl2br(htmlspecialchars($message)) . "\"
                        </div>
                    </div>
                    
                    <div style=\"text-align: center; margin-top: 40px;\">
                        <a href=\"http://localhost:3000\" style=\"background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 9999px; font-weight: 600; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);\">
                            Visit Website
                        </a>
                    </div>
                </div>
                
                <div style=\"background-color: #f8fafc; padding: 25px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;\">
                    166 Cassiobury Dr, Watford WD17 3AJ, UK &bull; +44 1923 256212
                </div>
            </div>
        </div>
    ";
    
    $userMail->AltBody = "Dear {$name},\n\nThank you for reaching out to Cassio Dry Cleaners. We have received your inquiry for {$service} and will get back to you within 2 hours.\n\nMessage submitted:\n{$message}\n\nBest regards,\nCassio Dry Cleaners Team";
    $userMail->send();
    $successUser = true;
} catch (Exception $e) {
    $lastError .= "User Email Error: " . $userMail->ErrorInfo . " | ";
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
