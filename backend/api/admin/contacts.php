<?php
require_once dirname(dirname(__DIR__)) . '/config.php';
handleCors();

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
if (empty($authHeader) || strpos($authHeader, 'Bearer ') !== 0) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $db = getDbConnection();
    try {
        $search = $_GET['search'] ?? '';
        $service = $_GET['service'] ?? 'all';
        $dateFilter = $_GET['dateFilter'] ?? 'all';
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : null;

        $where = ["1=1"];
        $params = [];

        if ($dateFilter === 'today') {
            $where[] = "DATE(date) = CURDATE()";
        } elseif ($dateFilter === 'yesterday') {
            $where[] = "DATE(date) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)";
        } elseif ($dateFilter === '7days') {
            $where[] = "date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
        } elseif ($dateFilter === '30days') {
            $where[] = "date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)";
        } elseif ($dateFilter === 'lastmonth') {
            $where[] = "MONTH(date) = MONTH(DATE_SUB(CURDATE(), INTERVAL 1 MONTH)) AND YEAR(date) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 MONTH))";
        } elseif ($dateFilter === '3months') {
            $where[] = "date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)";
        } elseif ($dateFilter === '6months') {
            $where[] = "date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)";
        } elseif ($dateFilter === 'thisyear') {
            $where[] = "YEAR(date) = YEAR(CURDATE())";
        }

        if (!empty($search)) {
            $where[] = "(name LIKE :search OR email LIKE :search OR message LIKE :search)";
            $params[':search'] = "%$search%";
        }
        if ($service !== 'all' && !empty($service)) {
            $where[] = "service = :service";
            $params[':service'] = $service;
        }

        $whereSql = implode(' AND ', $where);

        // Get total count for this filter
        $countStmt = $db->prepare("SELECT COUNT(*) as total FROM contacts WHERE $whereSql");
        $countStmt->execute($params);
        $total = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];

        $sql = "SELECT * FROM contacts WHERE $whereSql ORDER BY date DESC";
        
        if ($limit !== null) {
            $offset = ($page - 1) * $limit;
            $sql .= " LIMIT $limit OFFSET $offset";
        }

        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "success" => true,
            "contacts" => $contacts,
            "total" => (int)$total,
            "hasMore" => $limit !== null ? ($total > ($page * $limit)) : false
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
    exit;
}

if ($method === 'DELETE') {
    $id = $_GET['id'] ?? '';
    if (empty($id)) {
        http_response_code(400);
        exit;
    }
    $db = getDbConnection();
    try {
        $stmt = $db->prepare("DELETE FROM contacts WHERE id = :id");
        $stmt->execute([':id' => $id]);
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
    }
    exit;
}
http_response_code(405);
