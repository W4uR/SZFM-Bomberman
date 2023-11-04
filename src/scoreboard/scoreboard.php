<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js"></script>
    <?php include '../php/fillScoreboard.php'; ?>
    <script src="scoreboard.js"></script>
    <link rel="stylesheet" type="text/css" href="scoreboard.css">
</head>
<body onload="showTopPlayers()">
<input title="Nyomd le a szóköz billentyűt részletesebb keresésért." type="text" id="myInput" onkeyup="filterUsersOrPoints()" placeholder="Search for Names or Points">
</body>
</html>