<?php
header('Content-type: application/json');
include 'dbconnection.php';

$data=[];

$result=$conn->query("  SELECT program, COUNT(*) AS count FROM students GROUP BY program  ");
while($row=$result->fetch_assoc()){
    $data[]=$row;
}

echo json_encode($data);
?>