<?php
// Include the database configuration file
require_once 'dbConfig.php';

$PlayerName = $_GET['PlayerName'];

$result = $db->query("SELECT SkinID FROM player WHERE player.PlayerName = '" . $PlayerName ."'");

if (!$result) {
    die("Query failed: " . $db->error);
}


if($row = $result->fetch_assoc()){
    header('Content-Type: application/text');
    echo $row['SkinID'];
}
// Close the database connection
$db->close();
?>
