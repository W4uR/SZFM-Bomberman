const maxDisplay = 10;

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
//TODO: Van egy olyan bug, hogy mikor alapból belépek az oldalra csak a top 10 játékos látszódik.
//Ha ilyenkor az alapból üres kereső mezőbe ütök egy törlést vagy ha keresés után üresre vissza törlöm a keresőmezőt
//akkor valamiért minden játékos látszódni fog tehát valamiért megjelennek a top10-en kívüliek is.
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
    li[0].style.setProperty('--text',"rgb(255, 215, 0)")//gold
    li[1].style.setProperty('--text',"rgb(168, 163, 163)");//silver
    li[2].style.setProperty('--text',"rgb(158, 84, 13)");//bronze
}
