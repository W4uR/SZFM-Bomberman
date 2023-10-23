<?php
header('Content-Type: application/json');

require_once 'dbConfig.php';
// Receive the JSON data from the client

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $player1_name = $data['player1_name'];
    $player1_skindId = $data['player1_skindId'];
    $player2_name = $data['player2_name'];
    $player2_skindId = $data['player2_skindId'];
    // Prepare and execute an SQL INSERT statement
    $stmt = $db->prepare("INSERT INTO player (PlayerName, SkinID) VALUES (?,?),(?,?) ON DUPLICATE KEY UPDATE SkinID = VALUES(SkinID)");
    $stmt->bind_param("ssss", $player1_name, $player1_skindId,$player2_name,$player2_skindId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Data inserted successfully']);
    } else {
        echo json_encode(['error' => 'Data insertion failed']);
    }
    // Close the prepared statement
    $stmt->close();

  // Respond with a success message
  echo json_encode(['message' => 'Data saved successfully']);
} else {
  echo json_encode(['error' => 'Invalid data']);
}
?>
