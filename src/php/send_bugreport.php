<?php

// Connect to the MySQL database
require_once 'dbConfig.php';

// Get the bug description from the form
$bug_description = $_POST['bug_description'];

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

$alert_message = 'Data sent to database successfully.';
echo '<script>alert("' . $alert_message . '");</script>';

?>
