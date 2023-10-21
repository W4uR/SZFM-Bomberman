function redirectToGame(){ 
    //TODO: needs to bring the person the character picker screen
    window.location.href = "../game/game.html";
}
document.getElementById('goToGame').addEventListener('click',redirectToGame);

function redirectToScoreboard(){
    window.location.href = "../scoreboard/scoreboard.html";
}
document.getElementById('goToScoreboard').addEventListener('click',redirectToScoreboard);

function openBugReport(){
    var url = "./bug/bug.html";
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var windowWidth = 800;
    var windowHeight = 600;
    var left = (screenWidth - windowWidth) / 2;
    var top = (screenHeight - windowHeight) / 2;
    var windowName = "Bug Reports";
    var windowFeatures = "width=" + windowWidth + ",height=" + windowHeight + ",left=" + left + ",top=" + top + ",toolbar=no,location=no,status=no,menubar=no,scrollbars=yes";
    var newWindow = window.open(url, windowName, windowFeatures);
}

document.getElementById('goToBugreport').addEventListener('click',openBugReport);