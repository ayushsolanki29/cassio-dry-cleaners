<?php
require_once dirname(dirname(__DIR__)) . '/config.php';
handleCors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$email = trim($input['email'] ?? '');
$password = trim($input['password'] ?? '');

$db = getDbConnection();

// Auto-create table if not exists
$db->exec("
CREATE TABLE IF NOT EXISTS `settings` (
    `key_name` VARCHAR(50) PRIMARY KEY,
    `value` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");

$stmt = $db->query("SELECT key_name, value FROM settings WHERE key_name IN ('admin_email', 'admin_password')");
$settings = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

$dbEmail = $settings['admin_email'] ?? 'admin@cassio.com';
$dbPasswordHash = $settings['admin_password'] ?? null;

$isPasswordValid = false;

if ($dbPasswordHash) {
    $isPasswordValid = password_verify($password, $dbPasswordHash);
} else {
    // Fallback to default if not yet set in database
    $isPasswordValid = ($password === 'admin123');
}

if ($email === $dbEmail && $isPasswordValid) {
    $token = base64_encode($email . ":" . time());
    echo json_encode([
        "success" => true,
        "token" => $token,
        "message" => "Login successful"
    ]);
} else {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Invalid email or password"
    ]);
}
