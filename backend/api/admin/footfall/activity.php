<?php
require_once dirname(__DIR__, 3) . '/config.php';
handleCors();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    exit;
}

$db = getDbConnection();

$filter = $_GET['filter'] ?? 'all';
$search = $_GET['search'] ?? '';
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = isset($_GET['limit']) ? (int)$_GET['limit'] : null;

$where = ["1=1"];
$params = [];

if ($filter === 'today') {
    $where[] = "DATE(created_at) = CURDATE()";
} elseif ($filter === 'yesterday') {
    $where[] = "DATE(created_at) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)";
} elseif ($filter === '7days') {
    $where[] = "created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
} elseif ($filter === '30days') {
    $where[] = "created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)";
} elseif ($filter === 'lastmonth') {
    $where[] = "MONTH(created_at) = MONTH(DATE_SUB(CURDATE(), INTERVAL 1 MONTH)) AND YEAR(created_at) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 MONTH))";
} elseif ($filter === '3months') {
    $where[] = "created_at >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)";
} elseif ($filter === '6months') {
    $where[] = "created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)";
} elseif ($filter === 'thisyear') {
    $where[] = "YEAR(created_at) = YEAR(CURDATE())";
}

if (!empty($search)) {
    $where[] = "(visitor_id LIKE :search OR ip_address LIKE :search OR city LIKE :search OR country LIKE :search OR page_url LIKE :search OR referrer LIKE :search)";
    $params[':search'] = "%$search%";
}

$whereSql = implode(' AND ', $where);

try {
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM footfall WHERE $whereSql");
    $countStmt->execute($params);
    $total = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];

    $sql = "SELECT id, visitor_id, session_id, ip_address, country, city, browser, os, device_type, screen_resolution, page_url, referrer, user_agent, created_at 
            FROM footfall 
            WHERE $whereSql 
            ORDER BY created_at DESC";

    if ($limit !== null) {
        $offset = ($page - 1) * $limit;
        $sql .= " LIMIT $limit OFFSET $offset";
    }

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $activity = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "activity" => $activity,
        "total" => (int)$total,
        "hasMore" => $limit !== null ? ($total > ($page * $limit)) : false
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
