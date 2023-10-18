<?php 
// Include the database configuration file  
require_once 'dbConfig.php'; 
 
// Get image data from database 
$result = $db->query("SELECT immage FROM resource");

if (!$result) {
    die("Query failed: " . $conn->error);
}

// Step 4: Create an array to store the results
$dataArray = array();

// Step 3 and 4: Loop through the query results, encode the data, and store in the array
while ($row = $result->fetch_assoc()) {
    $imgData = base64_encode($row['immage']);
    $dataArray[] = array('imgData' => $imgData);
}

// Step 5: Convert the array to a JSON string
$jsonResponse = json_encode($dataArray);

// Step 6: Set appropriate headers for the response
header('Content-Type: application/json');

// Step 7: Echo the JSON response
echo $jsonResponse;

// Step 8: Close the database connection
$db->close();
