<?php
require_once dirname(dirname(__DIR__)) . '/config.php';
handleCors();

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
if (empty($authHeader) || strpos($authHeader, 'Bearer ') !== 0) {
    http_response_code(401);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = getDbConnection();
    try {
        $stmt = $db->query("
            SELECT 
                COUNT(*) as total,
                SUM(DATE(date) = CURDATE()) as today,
                SUM(date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)) as this_week,
                SUM(MONTH(date) = MONTH(CURDATE()) AND YEAR(date) = YEAR(CURDATE())) as this_month
            FROM contacts
        ");
        $stats = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode([
            "success" => true,
            "total" => (int)$stats['total'],
            "today" => (int)$stats['today'],
            "thisWeek" => (int)$stats['this_week'],
            "thisMonth" => (int)$stats['this_month']
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
    }
}
