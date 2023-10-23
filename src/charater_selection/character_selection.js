let skins = new Map();
let numbericSkins = [];
loadAllSkins()

let player1_index = 0;
let player2_index = 0;



function onNameChanged(caller){
    getSpriteByName(caller.value).then((skinData)=>{
        if(skinData != undefined)
        document.querySelector("img."+caller.classList[0]).src = skinData;
    });
} 

// Kinézetválasztó  gombok megnyomásakor hívódik meg
document.querySelectorAll("button.skin").forEach((b)=>b.addEventListener("click",changeSkin));
function changeSkin(event){
    if(event.target.classList.contains("player1")){
        if(event.target.classList.contains("left")){
            player1_index = (--player1_index+numbericSkins.length)%numbericSkins.length
        }else{
            player1_index =  (++player1_index+numbericSkins.length)%numbericSkins.length
        }
        document.querySelector("img.player1").src = skins.get(numbericSkins[player1_index]);
    }else{
        if(event.target.classList.contains("left")){
            player2_index = (--player2_index+numbericSkins.length)%numbericSkins.length
        }else{
            player2_index = (++player2_index+numbericSkins.length)%numbericSkins.length
        }
        document.querySelector("img.player2").src = skins.get(numbericSkins[player2_index]);
    }

}

function loadAllSkins(){
    $.ajax({
        url: '../php/loadAllSkins.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            response.forEach(d => { 
                skins.set(d.ResourceID,"data:image/png;base64," + d.Sprite);
                numbericSkins.push(d.ResourceID);
            });
            document.querySelectorAll("img.skin").forEach(e =>{e.src = skins.get(numbericSkins[0])});
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    })
}

function getSpriteByName(playerName){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../php/getSkinIDbyPlayerName.php',
            method: 'GET',
            dataType: 'text',
            data: {
                PlayerName: playerName
            },
            success: function(skinId) {
                resolve(skins.get(skinId));
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', errorThrown);
            }
        })
    });
}

function start(){
    const toGame = {
        player1_name: document.querySelector("input.player1").value,
        player1_skindData: skins.get(numbericSkins[player1_index]),
        player2_name: document.querySelector("input.player2").value,
        player2_skindData:  skins.get(numbericSkins[player2_index])
    }
    if(/^\s*$/.test(toGame.player1_name) || /^\s*$/.test(toGame.player2_name)){
        alert("A név megadása kötelező!");
        return;
    }else if(toGame.player1_name == toGame.player2_name){
        alert("Magad ellen tök béna küzdeni...")
        return;
    }

    sessionStorage.setItem("playerDatas", JSON.stringify(toGame));
    sendPlayerDataToDatabase();
    
}

function sendPlayerDataToDatabase(){
    const toDatabase = {
        player1_name: document.querySelector("input.player1").value,
        player1_skindId: numbericSkins[player1_index],
        player2_name:  document.querySelector("input.player2").value,
        player2_skindId: numbericSkins[player2_index]
    };
      
    fetch('../php/send_players.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(toDatabase),
    })
    .then(response => {
        if (response.ok) {
        return response.text();
        } else {
        throw new Error('Request failed');
        }
    })
    .then(responseData => {
        console.log('Data saved:', responseData);
        window.location.href = "../game/game.html";
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert("Valami nem jó...");
    });
}

document.getElementById("go").addEventListener("click", start);