<?php
header('Content-Type: application/json');
include 'dbconnection.php';

$data = [];
$year=2024;


$result = $conn->query("SELECT month, SUM(amount) AS total FROM earnings where year= $year GROUP BY month ORDER BY FIELD(month, 'January','February','March','April','May','June','July','August','September','October','November','December')");
while ($row = $result->fetch_assoc()) {
    $data[] = [
        'month' => $row['month'],
        'total' => $row['total']
    ];
}

echo json_encode($data);
?>
