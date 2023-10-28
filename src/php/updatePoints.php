<?php
require_once 'dbConfig.php';

// Get the player name from the POST data
if (isset($_POST['username'])) {
  $user = $_POST['username'];
  echo $user;
}
?>