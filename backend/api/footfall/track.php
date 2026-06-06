<?php
require_once dirname(__DIR__, 2) . '/config.php';
handleCors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit;
}

$db = getDbConnection();

// Auto-create table if not exists (for easy setup)
$db->exec("
CREATE TABLE IF NOT EXISTS `footfall` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `visitor_id` VARCHAR(100),
    `session_id` VARCHAR(100),
    `ip_address` VARCHAR(100),
    `country` VARCHAR(100),
    `city` VARCHAR(100),
    `browser` VARCHAR(100),
    `os` VARCHAR(100),
    `device_type` VARCHAR(100),
    `screen_resolution` VARCHAR(50),
    `page_url` TEXT,
    `referrer` TEXT,
    `user_agent` TEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_created_at` (`created_at` DESC),
    INDEX `idx_visitor` (`visitor_id`),
    INDEX `idx_session` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");

try {
    $ip = !empty($input['ipAddress']) ? $input['ipAddress'] : ($_SERVER['REMOTE_ADDR'] ?? '');

    // Hash IP to preserve privacy while allowing unique tracking
    $ipHash = hash('sha256', $ip);

    // Check if this IP has been tracked in the last 7 days
    $checkStmt = $db->prepare("SELECT id FROM footfall WHERE ip_address = :ip_hash AND created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) LIMIT 1");
    $checkStmt->execute([':ip_hash' => $ipHash]);
    if ($checkStmt->fetch()) {
        // Already tracked within 7 days, ignore silently
        echo json_encode(["success" => true, "message" => "Already tracked"]);
        exit;
    }

    $stmt = $db->prepare("
        INSERT INTO footfall 
        (visitor_id, session_id, ip_address, country, city, browser, os, device_type, screen_resolution, page_url, referrer, user_agent) 
        VALUES 
        (:visitor_id, :session_id, :ip_address, :country, :city, :browser, :os, :device_type, :screen_resolution, :page_url, :referrer, :user_agent)
    ");
    
    $stmt->execute([
        ':visitor_id' => $input['visitorId'] ?? null,
        ':session_id' => $input['sessionId'] ?? null,
        ':ip_address' => $ipHash, // Using hash instead of 0.0.0.0
        ':country' => null,
        ':city' => null,
        ':browser' => $input['browser'] ?? null,
        ':os' => $input['os'] ?? null,
        ':device_type' => $input['deviceType'] ?? null,
        ':screen_resolution' => $input['screenResolution'] ?? null,
        ':page_url' => $input['pageUrl'] ?? null,
        ':referrer' => $input['referrer'] ?? null,
        ':user_agent' => $input['userAgent'] ?? ($_SERVER['HTTP_USER_AGENT'] ?? null)
    ]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
