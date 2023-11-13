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
$html .= '<h1 class="titleOfPage">Ranglista</h1>';
$html .= '<div class="titleContainer">';
$html .= '<span class="player">Játékos Neve</span>';
$html .= '<span class="point">Játékos Pontszáma</span>';
$html .= '</div>';
$html .= '<div class="container">';
$html .= '<div class="scoreboardContainer">';
// Start the HTML list
$html .= '<ul id="myUL">';
// Iterate over the dataArray and add each row to the list
foreach ($dataArray as $row) {
    $html .= '<li>';
    $html .= '<span class="playerName">' . $row['nameID'] . '</span>' . '<span class="hyphen"> - </span>' .  '<span class="playerPoint">' . $row['point'] . '</span>';
    $html .= '</li>';
}

// End the HTML list
$html .= '</ul>';
$html .= '</div>';
$html .= '<div class="topScoreSkinConatiner" hidden>';
$html .= '<h1>Legtöbb pontall rendelkező játékos:</h1>';
$html .= '<img id="highest" class="playerSkinWithHighestScore"> </img>';
$html .= '</div>';
$html .= '</div>';
$html .= '<input class="searchBar" title="Nyomd le a szóköz billentyűt részletesebb keresésért." 
type="text" id="myInput" onkeyup="filterUsersOrPoints()" placeholder="Keress a játékos nevére vagy pontjaira!">';
$html .= '<button class="goToMainMenuButton" id="mainMenuButton" onclick="goToMainScreen()">Főmenü</button>';
// Echo the HTML
echo $html;

$db->close();
?>
