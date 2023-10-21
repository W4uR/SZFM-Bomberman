<?php
// Include the database configuration file
require_once 'dbConfig.php';
$PlayerName;
if (isset($_GET['PlayerName'])) {
    $PlayerName = $_GET['PlayerName'];
}
else{
    $PlayerName = "User_1";
}
// Get ResourceID and image data from the database
$result = $db->query("SELECT Resource.Sprite FROM Resource INNER JOIN Player ON Resource.ResourceID = Player.SkinID WHERE Player.PlayerName = '" . $PlayerName ."'");

if (!$result) {
    die("Query failed: " . $db->error);
}


if($row = $result->fetch_assoc()){
    $imgData = base64_encode($row['Sprite']);
    header('Content-Type: application/text');
    echo $imgData;
}
// Close the database connection
$db->close();
?>
