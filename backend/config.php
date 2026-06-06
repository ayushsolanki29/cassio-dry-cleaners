<?php
date_default_timezone_set('Europe/London');

// Load .env file helper for backend (if present)
function loadEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
            putenv("{$name}={$value}");
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}

loadEnv(__DIR__ . '/.env');

// SMTP Mail Credentials (defaulting to requested values, fallback to environment)
define('SMTP_HOST', getenv('SMTP_HOST') ?: 'smtp.hostinger.com');
define('SMTP_PORT', (int)(getenv('SMTP_PORT') ?: 465)); // 587=tls, 465=ssl
define('SMTP_SECURE', getenv('SMTP_SECURE') ?: 'ssl');  // 'tls' for 587, 'ssl' for 465
define('SMTP_USER', getenv('SMTP_USER') ?: 'info@speedylaundry.co.uk');
define('SMTP_PASS', getenv('SMTP_PASS') ?: 'ThisLostGost@^57777');
define('NOTIFICATION_EMAIL', getenv('NOTIFICATION_EMAIL') ?: 'urupanchal14@gmail.com');

// CORS Headers Helper
function handleCors() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }
}

// Database Credentials
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'cassio');

// PDO Database Connection Helper
function getDbConnection() {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
            // Set timezone to London for MySQL connection dynamically using PHP offset
            $offset = date('P');
            $pdo->exec("SET time_zone = '{$offset}'");
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Database connection failed: " . $e->getMessage()]);
            exit;
        }
    }
    return $pdo;
}
