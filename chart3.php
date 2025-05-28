<?php
header('Content-type: application/json');
include 'dbconnection.php';
$data=[];

$result=$conn->query("  SELECT designation, COUNT(*) AS count FROM teachers GROUP BY designation order by count");
while($row=$result->fetch_assoc()){
    $data[] = $row;
}

echo json_encode($data);
?>
