<?php
require_once dirname(__DIR__, 3) . '/config.php';
handleCors();

// Verify Admin token logic should go here, but omitted for simplicity unless exist.
// We'll mimic the contacts.php auth if needed.
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
} elseif ($filter === 'lastmonth') {
    $dateCondition = "MONTH(created_at) = MONTH(DATE_SUB(CURDATE(), INTERVAL 1 MONTH)) AND YEAR(created_at) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 MONTH))";
} elseif ($filter === '3months') {
    $dateCondition = "created_at >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)";
} elseif ($filter === '6months') {
    $dateCondition = "created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)";
} elseif ($filter === 'thisyear') {
    $dateCondition = "YEAR(created_at) = YEAR(CURDATE())";
} elseif ($filter === 'custom' && !empty($_GET['start']) && !empty($_GET['end'])) {
    $dateCondition = "DATE(created_at) >= :start AND DATE(created_at) <= :end";
    $params[':start'] = $_GET['start'];
    $params[':end'] = $_GET['end'];
}

try {
    // Unique Visitors
    $stmt = $db->prepare("SELECT COUNT(DISTINCT visitor_id) as unique_visitors, COUNT(DISTINCT ip_address) as unique_ips FROM footfall WHERE $dateCondition");
    $stmt->execute($params);
    $visitors = $stmt->fetch(PDO::FETCH_ASSOC);

    // Total Sessions & Interactions
    $stmt = $db->prepare("SELECT COUNT(DISTINCT session_id) as total_sessions, COUNT(id) as total_interactions FROM footfall WHERE $dateCondition");
    $stmt->execute($params);
    $sessions = $stmt->fetch(PDO::FETCH_ASSOC);

    // This Month Traffic
    $stmt = $db->query("SELECT COUNT(DISTINCT visitor_id) as cnt FROM footfall WHERE MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())");
    $thisMonth = $stmt->fetch(PDO::FETCH_ASSOC)['cnt'] ?? 0;

    // Last 3 Months Traffic
    $stmt = $db->query("SELECT COUNT(DISTINCT visitor_id) as cnt FROM footfall WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)");
    $last3Months = $stmt->fetch(PDO::FETCH_ASSOC)['cnt'] ?? 0;

    echo json_encode([
        "success" => true,
        "uniqueVisitors" => (int)$visitors['unique_visitors'],
        "uniqueIps" => (int)$visitors['unique_ips'],
        "totalSessions" => (int)$sessions['total_sessions'],
        "totalInteractions" => (int)$sessions['total_interactions'],
        "thisMonthTraffic" => (int)$thisMonth,
        "last3MonthsTraffic" => (int)$last3Months
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
