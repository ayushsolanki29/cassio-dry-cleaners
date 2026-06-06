<?php
require_once dirname(__DIR__) . '/config.php';
handleCors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$pageUrl = trim($input['url'] ?? '');
$referrer = trim($input['referrer'] ?? '');
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

if (empty($pageUrl)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing url"]);
    exit;
}

// Simple device detection
$device = 'Desktop';
if (preg_match('/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i', $userAgent)) {
    $device = 'Tablet';
} elseif (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile)/i', $userAgent)) {
    $device = 'Mobile';
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$ipHash = hash('sha256', $ip);

$db = getDbConnection();
try {
    $stmt = $db->prepare("INSERT INTO traffic_logs (page_url, referrer, ip_hash, user_agent, device_type) VALUES (:page_url, :referrer, :ip_hash, :user_agent, :device_type)");
    $stmt->execute([
        ':page_url' => $pageUrl,
        ':referrer' => $referrer ?: null,
        ':ip_hash' => $ipHash,
        ':user_agent' => substr($userAgent, 0, 255),
        ':device_type' => $device
    ]);
    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
