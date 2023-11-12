const maxDisplay = 10;
let topScorer = "";
let skins = new Map();
const top_player_img = document.querySelector("img.playerSkinWithHighestScore");
loadAllSkins()

function filterUsersOrPoints() {
    // Declare variables
    var input, filter, ul, li, a, span, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    let currentlyDisplayed = 0;

    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }

    // Loop through all list items
    for (i = 0; i < li.length && currentlyDisplayed < maxDisplay; i++) {
        // Check if the search query matches the text value
        if (li[i].textContent.indexOf(filter) > -1) {
            li[i].style.display = "";
            currentlyDisplayed++;
        }
    }
}
function showTopPlayers() {
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        if (i < maxDisplay) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    if(li.length > 0){
        li[0].style.setProperty('--text',"rgb(255, 215, 0)")//gold
        li[0].style.fontSize = "50px";
        topScorer = li[0].textContent.split('-')[0].trim();
    }
    if(li.length > 1){
        li[1].style.setProperty('--text',"rgb(168, 163, 163)");//silver
        li[1].style.fontSize = "45px";
    }
    if(li.length > 2){
        li[2].style.setProperty('--text',"rgb(158, 84, 13)");//bronze
        li[2].style.fontSize = "40px";
    }
}

function goToMainScreen(){
    window.location.href = "../mainscreen/main.html";
}

function getSkinIDbyPlayerName(playerName){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../php/getSkinIDbyPlayerName.php',
            method: 'GET',
            dataType: 'text',
            data: {
                PlayerName: playerName
            },
            success: function(skinId) {
                resolve(skinId);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', errorThrown);
            }
        })
    });
}

function loadAllSkins(){
    $.ajax({
        url: '../php/loadAllSkins.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            response.forEach(d => { 
                skins.set(d.ResourceID,"data:image/png;base64," + d.Sprite);
            });
            document.querySelectorAll("img.skin").forEach(e =>{e.src = skins.get(numbericSkins[0])});
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    })
}
;
function loadHighestScorerSkin(){
    getSkinIDbyPlayerName(topScorer).then((skinId)=>{
        if(skinId){
            document.getElementsByClassName("topScoreSkinConatiner")[0].removeAttribute("hidden");
            top_player_img.src = skins.get(skinId);
        }
    });     
}

