<?php
require_once dirname(__DIR__, 2) . '/config.php';
handleCors();

// Verify token
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
if (empty($authHeader) || strpos($authHeader, 'Bearer ') !== 0) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$newEmail = trim($input['email'] ?? '');
$currentPassword = trim($input['currentPassword'] ?? '');
$newPassword = trim($input['newPassword'] ?? '');

if (empty($newEmail) || empty($currentPassword)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Email and Current Password are required"]);
    exit;
}

$db = getDbConnection();

// Auto-create table if not exists
$db->exec("
CREATE TABLE IF NOT EXISTS `settings` (
    `key_name` VARCHAR(50) PRIMARY KEY,
    `value` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");

// Fetch current credentials
$stmt = $db->query("SELECT key_name, value FROM settings WHERE key_name IN ('admin_email', 'admin_password')");
$settings = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

$currentHash = $settings['admin_password'] ?? null;
$currentEmail = $settings['admin_email'] ?? 'admin@cassio.com';

// If no hash exists, it means default password 'admin123'
if (!$currentHash) {
    if ($currentPassword !== 'admin123') {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Incorrect current password"]);
        exit;
    }
} else {
    if (!password_verify($currentPassword, $currentHash)) {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Incorrect current password"]);
        exit;
    }
}

// Update credentials
try {
    $db->beginTransaction();

    $stmt = $db->prepare("REPLACE INTO settings (key_name, value) VALUES ('admin_email', :email)");
    $stmt->execute([':email' => $newEmail]);

    if (!empty($newPassword)) {
        $hash = password_hash($newPassword, PASSWORD_DEFAULT);
        $stmt = $db->prepare("REPLACE INTO settings (key_name, value) VALUES ('admin_password', :pass)");
        $stmt->execute([':pass' => $hash]);
    }

    $db->commit();
    echo json_encode(["success" => true, "message" => "Credentials updated successfully"]);
} catch (PDOException $e) {
    $db->rollBack();
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to update credentials"]);
}
