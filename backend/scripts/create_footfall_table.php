<?php
require_once dirname(__DIR__) . '/config.php';

$db = getDbConnection();

$sql = "
CREATE TABLE IF NOT EXISTS footfall (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visitor_id VARCHAR(100),
    session_id VARCHAR(100),
    ip_address VARCHAR(100),
    country VARCHAR(100),
    city VARCHAR(100),
    browser VARCHAR(100),
    os VARCHAR(100),
    device_type VARCHAR(100),
    screen_resolution VARCHAR(50),
    page_url TEXT,
    referrer TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at DESC),
    INDEX idx_visitor (visitor_id),
    INDEX idx_session (session_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $db->exec($sql);
    echo "Table 'footfall' created successfully.\n";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
