<?php
// Include the database configuration file
require_once 'dbConfig.php';

// Get ResourceID and image data from the database
$result = $db->query("SELECT ResourceID, Sprite FROM Resource WHERE ResourceID LIKE 'SKIN_%'");

if (!$result) {
    die("Query failed: " . $conn->error);
}

// Create an associative array to store the results
$dataArray = array();

// Loop through the query results, encode the data, and store in the associative array
while ($row = $result->fetch_assoc()) {
    $imgData = base64_encode($row['Sprite']);
    $dataArray[] = array('ResourceID' => $row['ResourceID'], 'Sprite' => $imgData);
}

// Convert the associative array to a JSON string
$jsonResponse = json_encode($dataArray);

// Set appropriate headers for the response
header('Content-Type: application/json');

// Echo the JSON response
echo $jsonResponse;

// Close the database connection
$db->close();
?>