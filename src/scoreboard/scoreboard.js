function filterUsersOrPoints() {
    // Declare variables
    var input, filter, ul, li, a, span, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        span = li[i].getElementsByTagName("span")[0];

        // Get the text value of both the `a` and `span` tags
        txtValue = a.textContent + " - " + span.textContent;

        // Check if the search query matches the text value
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
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
        if (i < 10) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}