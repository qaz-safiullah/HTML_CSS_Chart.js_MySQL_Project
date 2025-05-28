<?php
header('Content-type:application/json');
include 'dbconnection.php';

$data =[];

$result= $conn->query("SELECT department, COUNT(*) AS count FROM employees GROUP BY department");
while($row=$result->fetch_assoc()){
    $data[]=$row;
}

echo json_encode($data);
?>