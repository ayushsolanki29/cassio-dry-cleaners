<?php
require_once dirname(__DIR__, 3) . '/config.php';
handleCors();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    exit;
}

$db = getDbConnection();

$filter = $_GET['filter'] ?? 'all';
$dateCondition = "1=1";
$params = [];

if ($filter === 'today') {
    $dateCondition = "DATE(created_at) = CURDATE()";
} elseif ($filter === 'yesterday') {
    $dateCondition = "DATE(created_at) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)";
} elseif ($filter === '7days') {
    $dateCondition = "created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
} elseif ($filter === '30days') {
    $dateCondition = "created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)";
} elseif ($filter === 'custom' && !empty($_GET['start']) && !empty($_GET['end'])) {
    $dateCondition = "DATE(created_at) >= :start AND DATE(created_at) <= :end";
    $params[':start'] = $_GET['start'];
    $params[':end'] = $_GET['end'];
}

try {
    $stmt = $db->prepare("
        SELECT visitor_id, MAX(created_at) as last_visit, COUNT(id) as total_interactions,
               ip_address, city, country, browser, os, device_type
        FROM footfall 
        WHERE $dateCondition AND visitor_id IS NOT NULL
        GROUP BY visitor_id, ip_address, city, country, browser, os, device_type
        ORDER BY last_visit DESC 
        LIMIT 200
    ");
    $stmt->execute($params);
    $visitors = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "visitors" => $visitors
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
