<?php
// Include the database configuration file
require_once 'dbConfig.php';

// Get ResourceID and image data from the database
$result = $db->query("SELECT PlayerName, Points FROM player");

if(!$result){
    die("Query failed " . $conn->error);
}

$dataArray = array();

while($row = $result->fetch_assoc()){
    $dataArray[] = array('nameID' => $row['PlayerName'],"point" => $row['Points']);
}

$jsonResponse = json_encode($dataArray);

header('Content-Type: application/json');

echo $jsonResponse;

$db->close();
?>