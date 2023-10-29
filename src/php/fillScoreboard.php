<?php
// Include the database configuration file
require_once 'dbConfig.php';

// Get ResourceID and image data from the database
$result = $db->query("SELECT PlayerName, Points FROM player ORDER BY Points DESC");

if(!$result){
    die("Query failed " . $conn->error);
}

$dataArray = array();

while($row = $result->fetch_assoc()){
    $dataArray[] = array('nameID' => $row['PlayerName'],"point" => $row['Points']);
}

$html = '';

// Start the HTML list
$html .= '<ul id="myUL">';

// Iterate over the dataArray and add each row to the list
foreach ($dataArray as $row) {
    $html .= '<li>';
    $html .= '<a href="#">' . $row['nameID'] . '</a>' . ' - ' .  '<span href="#">' . $row['point'] . '</span>';
    $html .= '</li>';
}

// End the HTML list
$html .= '</ul>';

// Echo the HTML
echo $html;

$db->close();
?>
