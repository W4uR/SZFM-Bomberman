<?php
require_once 'dbConfig.php';

$user = $_POST['username'];

$sql = "UPDATE player SET Points = Points + 1 WHERE PlayerName = '$user'";
$stmt = $db->prepare($sql);

if ($stmt->execute()) {
    $stmt->close();
    $db->close();
    exit();
} else {
    echo "Error updating points: " . $stmt->error;
}
?>