let skins = new Map();
let numbericSkins = [];
loadAllSkins()
let maps = new Map();
let numbericMaps = [];
let mapSprites = new Map();


let player1_index = 0;
let player2_index = 0;
let map_index = 0;

const player1_img = document.querySelector("img.player1");
const player2_img = document.querySelector("img.player2");
const player1_name = document.querySelector("input.player1");
const player2_name = document.querySelector("input.player2");
const map_img = document.getElementById('mapImg');

const startButton = document.querySelector("button.startGame");


function loadPlayerSkins(){
    if(isEmpty(player1_name.value) == false){
        getSkinIDbyPlayerName(player1_name.value).then((skinId)=>{
            if(skinId){
                player1_img.src = skins.get(skinId);
                player1_index = numbericSkins.indexOf(skinId);
            }
        });
    }
    if(isEmpty(player2_name.value) == false){
        getSkinIDbyPlayerName(player2_name.value).then((skinId)=>{
            if(skinId){
                player2_img.src = skins.get(skinId);
                player2_index = numbericSkins.indexOf(skinId);
            }
        });
    }
} 

function changeSkin(player, direction){
    if(player == "player1"){
        if(direction == "left"){
            player1_index = (--player1_index+numbericSkins.length)%numbericSkins.length
        }else{
            player1_index =  (++player1_index+numbericSkins.length)%numbericSkins.length
        }
        player1_img.src = skins.get(numbericSkins[player1_index]);
    }else{
        if(direction == "left"){
            player2_index = (--player2_index+numbericSkins.length)%numbericSkins.length
        }else{
            player2_index = (++player2_index+numbericSkins.length)%numbericSkins.length
        }
        player2_img.src = skins.get(numbericSkins[player2_index]);
    }

}

let bufferGraphics;
let img;
function changeMap(direction){
    if(direction == "left"){
        map_index = (--map_index+numbericMaps.length)%numbericMaps.length
    }else{
        map_index = (++map_index+numbericMaps.length)%numbericMaps.length
    }
    img = loadImage(maps.get(numbericMaps[map_index]),renderMap)
}
function preload(){
    loadMapSprites();
    loadAllMaps();
}
function setup(){
    bufferGraphics = createGraphics(map_img.width, map_img.height);
}

function renderMap(){
    bufferGraphics.background(255);
    let scale = map_img.width/img.width;
    //TODO: Use loadPixels and img.pixels array insted of img.get()
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            let color = img.get(i,j).toString();
            switch(color){
                case "0,0,0,255":
                    bufferGraphics.image(mapSprites.get("CELL_barrier"),i*scale,j*scale,scale,scale);
                break;
                case "255,0,0,255":
                    bufferGraphics.image(mapSprites.get("CELL_wall"),i*scale,j*scale,scale,scale);
                    break;
                case "0,255,0,255":
                    bufferGraphics.fill(0,255,0);
                    bufferGraphics.rect(i*scale,j*scale,scale,scale)
                    break;
                case "0,0,255,255":
                    bufferGraphics.fill(0,0,255);
                    bufferGraphics.rect(i*scale,j*scale,scale,scale)
                    break;
                case "255,255,255,255": 
                    bufferGraphics.image(mapSprites.get("BACKGROUND"),i*scale,j*scale,scale,scale);
                    break;
            }
        }
    }
    // Set the src attribute of the img element to the data URL of the buffer
    map_img.src = bufferGraphics.canvas.toDataURL();
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

function loadAllMaps(){
    $.ajax({
        url: '../php/loadAllMaps.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            response.forEach(d => { 
                maps.set(d.MapID,"data:image/png;base64," + d.Sprite);
                numbericMaps.push(d.MapID);
            });
            img = loadImage(maps.get(numbericMaps[map_index]),renderMap)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    })
}
function loadMapSprites(){
    $.ajax({
        url: '../php/loadMapSprites.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {

            response.forEach(d => {
                loadImage("data:image/png;base64," + d.Sprite, img => {
                    mapSprites.set(d.ResourceID,img);
                });
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    })
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

function startGame(){
    const toGame = {
        player1_name: player1_name.value,
        player1_skindData: player1_img.src,
        player2_name: player2_name.value,
        player2_skindData: player2_img.src,
        mapData: maps.get(numbericMaps[map_index])
    }

    sessionStorage.setItem("gameDatas", JSON.stringify(toGame));
    sendPlayerDataToDatabase();
}

function sendPlayerDataToDatabase(){
    const toDatabase = {
        player1_name: player1_name.value,
        player1_skindId: numbericSkins[player1_index],
        player2_name: player2_name.value,
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
    });
}

function isEmpty(string){
    return /^\s*$/.test(string);
}

function updateStart(){
    startButton.disabled = isEmpty(player1_name.value)||isEmpty(player2_name.value)||numbericMaps[map_index]==undefined;
}

function loadPreviousPlayers() {
    if (localStorage.length > 0) {
        player1_name.value = localStorage.getItem('player1');
        player2_name.value = localStorage.getItem('player2');
        loadPlayerSkins();
        startButton.disabled = false;
    }
  }