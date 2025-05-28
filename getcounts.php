<?php
header('Content-Type: application/json');
include 'dbconnection.php';

$data = [];

$tables = ['students', 'teachers', 'employees'];
foreach ($tables as $table) {
    $result = $conn->query("SELECT COUNT(*) as count FROM $table");
    $row = $result->fetch_assoc();
    $data[$table] = $row['count'];
}

$year=2024;
$result = $conn->query("SELECT SUM(amount) as total FROM earnings where year = $year");
$row = $result->fetch_assoc();
$data['earnings'] = $row['total'];

echo json_encode($data);
?>

