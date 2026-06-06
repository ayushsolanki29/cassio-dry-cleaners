<?php
require_once dirname(dirname(__DIR__)) . '/config.php';
handleCors();

// Simple Token Verification
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
if (empty($authHeader) || strpos($authHeader, 'Bearer ') !== 0) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}

$db = getDbConnection();
try {
    // 1. Total Page Views
    $stmtViews = $db->query("SELECT COUNT(*) as total FROM traffic_logs");
    $totalViews = (int)$stmtViews->fetch()['total'];

    // 2. Unique Visitors
    $stmtUnique = $db->query("SELECT COUNT(DISTINCT ip_hash) as total FROM traffic_logs");
    $uniqueVisitors = (int)$stmtUnique->fetch()['total'];

    // 3. Device Breakdown
    $stmtDevices = $db->query("SELECT device_type, COUNT(*) as count FROM traffic_logs GROUP BY device_type");
    $devices = $stmtDevices->fetchAll();

    // 4. Most Visited Pages
    $stmtPages = $db->query("SELECT page_url, COUNT(*) as count FROM traffic_logs GROUP BY page_url ORDER BY count DESC LIMIT 10");
    $popularPages = $stmtPages->fetchAll();

    // 5. Traffic Timeline (daily views for the last 7 days)
    $stmtTimeline = $db->query("
        SELECT DATE(visited_at) as date, COUNT(*) as count, COUNT(DISTINCT ip_hash) as unique_count 
        FROM traffic_logs 
        WHERE visited_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        GROUP BY DATE(visited_at)
        ORDER BY date ASC
    ");
    $timeline = $stmtTimeline->fetchAll();

    echo json_encode([
        "success" => true,
        "analytics" => [
            "totalViews" => $totalViews,
            "uniqueVisitors" => $uniqueVisitors,
            "devices" => $devices,
            "popularPages" => $popularPages,
            "timeline" => $timeline
        ]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
