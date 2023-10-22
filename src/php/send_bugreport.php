<?php

// Connect to the MySQL database
require_once 'dbConfig.php';

// Get the bug description from the form
$bug_description = $_POST['bug_description'];

// Check if the bug description is empty
if (empty($bug_description)) {
  // The bug description is empty, so display an error message
  $alert_message = 'The bug description cannot be empty.';
  echo '<script>alert("' . $alert_message . '");</script>';

  // Prevent the form from being submitted
  // by redirecting the user back to the same page
  header('Location: ' . $_SERVER['HTTP_REFERER']);
  exit();
}

// Prepare the SQL statement
$sql = 'INSERT INTO bugreport (BugDescription) VALUES (?)';
$stmt = $db->prepare($sql);

// Bind the bug description to the prepared statement
$stmt->bind_param('s', $bug_description);

// Execute the prepared statement
$stmt->execute();

// Close the prepared statement and the database connection
$stmt->close();
$db->close();

// Redirect the user to the current page
header('Location: ' . $_SERVER['HTTP_REFERER']);
exit();

?>
