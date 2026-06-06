<?php
require_once dirname(__DIR__) . '/config.php';
handleCors();

// Include PHPMailer classes from vendorautoload
$vendorAutoload = dirname(__DIR__) . '/vendor/autoload.php';
if (!file_exists($vendorAutoload)) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Backend dependencies not installed. Please run setup.php first."
    ]);
    exit;
}

require_once $vendorAutoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$service = trim($input['service'] ?? '');
$message = trim($input['message'] ?? '');
$otherService = trim($input['otherService'] ?? '');

if (empty($name) || empty($email) || empty($service) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields"]);
    exit;
}

$db = getDbConnection();

$newId = "contact_" . time() . "_" . bin2hex(random_bytes(4));
$selectedService = ($service === "Other" && !empty($otherService)) ? $otherService : $service;
$dateNow = date('Y-m-d H:i:s');

try {
    $db->beginTransaction();

    $stmt = $db->prepare("INSERT INTO contacts (id, name, email, phone, service, message, date) VALUES (:id, :name, :email, :phone, :service, :message, :date)");
    $stmt->execute([
        ':id'      => $newId,
        ':name'    => $name,
        ':email'   => strtolower($email),
        ':phone'   => $phone ?: null,
        ':service' => $selectedService,
        ':message' => $message,
        ':date'    => $dateNow,
    ]);

    $stmtJob = $db->prepare("INSERT INTO email_jobs (contact_id, status) VALUES (:contact_id, 'pending')");
    $stmtJob->execute([':contact_id' => $newId]);

    $db->commit();
} catch (PDOException $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to store submission and job in database: " . $e->getMessage()]);
    exit;
}

// Trigger background job asynchronously (instant response)
$triggered = false;

// 1. Try triggering via Local HTTP Loopback Socket (extremely fast and robust for webservers)
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$port = (int)($_SERVER['SERVER_PORT'] ?? 80);
$scriptPath = dirname($_SERVER['SCRIPT_NAME']) . '/send_emails_job.php?id=' . urlencode($newId);

if (strpos($host, ':') !== false) {
    list($hostOnly, $hostPort) = explode(':', $host, 2);
    $host = $hostOnly;
    $port = (int)$hostPort;
}

$isSecure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443;
$targetHost = ($isSecure ? 'ssl://' : '') . ($host === 'localhost' ? '127.0.0.1' : $host);

$fp = @fsockopen($targetHost, $port, $errno, $errstr, 1);
if ($fp) {
    $out = "GET {$scriptPath} HTTP/1.1\r\n";
    $out .= "Host: {$host}" . ($port !== 80 && $port !== 443 ? ":{$port}" : "") . "\r\n";
    $out .= "Connection: Close\r\n\r\n";
    fwrite($fp, $out);
    fgets($fp, 128); // Wait for the server to acknowledge and execute the request
    fclose($fp);
    $triggered = true;
}

// 2. Fallback to CLI execution if loopback socket failed
if (!$triggered) {
    $phpPath = PHP_BINARY;
    if (preg_match('/php-cgi(.exe)?$/i', $phpPath)) {
        $phpPath = preg_replace('/php-cgi(.exe)?$/i', 'php$1', $phpPath);
    }
    $scriptPathCli = __DIR__ . '/send_emails_job.php';
    $contactIdArg = escapeshellarg($newId);
    $cmd = escapeshellarg($phpPath) . " " . escapeshellarg($scriptPathCli) . " " . $contactIdArg;

    if (substr(php_uname(), 0, 7) === "Windows") {
        pclose(popen("start /B " . $cmd, "r"));
    } else {
        exec($cmd . " > /dev/null 2>&1 &");
    }
}

http_response_code(201);
echo json_encode([
    "success" => true,
    "message" => "Contact form submitted successfully",
    "contactId" => $newId
]);
