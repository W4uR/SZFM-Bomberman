let names = new Map();


loadPlayerNames();


function loadPlayerNames() {
    $.ajax({
        url: '../php/fillScoreboard.php', // Replace with the actual URL of your PHP script
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            for(let i = 0; i < data.length; i++){
                names.set(data[i].nameID,data[i].point);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    });
}


