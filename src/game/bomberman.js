let SCALE;
const directions = [
    [-1, 0], // Fel
    [1, 0],  // Le
    [0, -1], // Balra
    [0, 1]   // Jobbra
  ];
const gameDatas = JSON.parse(sessionStorage.getItem("gameDatas"));
let previousTime;

let deltaTime;
let grid;
let cols;
let rows;
let mapImage;
let winner;
const sprites = new Map();
const maps = new Map();

let bombs = [];
let explosions = [];
let powerUps = [];

let player1;
let player2;

let imagesLoaded = 0;
let totalImages = -1;

function preload(){
    loadSprites();
    mapImage = loadImage(gameDatas.mapData);
}

// Akkor indul a játék ha az összes sprite betöltött
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      loop();
    }
}

function setup() {
    previousTime = millis();
    createCanvas(600, 600, document.getElementById("canvas"));
    background(20)
    textAlign(CENTER, TOP);
    textSize(24);
    fill(255);
    text('Loading...', width / 2, height / 2);
    noStroke();
    cols = mapImage.width;
    rows = mapImage.height;
    SCALE = width/cols;
    grid = make2DArray(cols,rows);
    initializeMap();
    initializePowerUps();
    noLoop();
}
  
function draw() {
    //Játék logika
    calcDeltaTime();
    //Update bombs
    updateBombs();
    //Update explosions
    updateExplosions();

    player1.update();
    player2.update();
    
    
    // Gameover
    checkGameOver();

    //Megjelnés
    renderScene();
}

function updateBombs(){
    for (let index = bombs.length-1; index >= 0 ; index--) {
        const element = bombs[index];
        element.update();       
    }
}

function updateExplosions(){
    for (let index = explosions.length-1; index >= 0 ; index--) {
        const element = explosions[index];
        element.update();       
    }
}

function checkGameOver(){
    if(player1.health <= 0 || player2.health <=0){
        tint(120,70,70);
        determineWinner();
        sendWinnerToPHP();
        document.getElementById("endGameContainer").removeAttribute("hidden");
        noLoop();
    }
}

function determineWinner(){
    if(player1.health === 0){
        winner = player2;
    }else{
        winner = player1;
    }
}

function sendWinnerToPHP(){
    fetch("../php/updatePoints.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        body: "username=" + encodeURIComponent(winner.playerName) // Encode the string value
    }).then(function(response) {
        return response.text();
    }).then(function(response) {
        console.log("Points UPDATED successfully.");
    });
}

function renderScene(){
    // Háttér renderelése
    if(sprites.has("BACKGROUND")){
        let bg = sprites.get("BACKGROUND");
        for (let x = 0; x < width; x += bg.width) {
            for (let y = 0; y < height; y += bg.height) {
              image(bg, x, y);
            }
        }
    }
    
    //Bombák renderelése
    bombs.forEach(b => {
        b.show();
    });
    //Erősítések renderelése
    powerUps.forEach(p => {
        p.show();
    })
    //Játékosok renderelése
    player1.show();
    player2.show();
    //Pálya renderelése
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows;j++){
            grid[i][j].show();
        }
    }
    //Robbanások renderelése
    explosions.forEach(e => { 
        e.show();
    });
}


function calcDeltaTime(){
    let currentTime = millis();
    deltaTime = (currentTime - previousTime)/1000;
    previousTime = currentTime;
}

function make2DArray(cols,rows){
    var arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function initializePowerUps(){
    // Spawnolható erősítések súlyozott valószínűséggel
    const powerUpOptions = [
        { option: undefined, weight: 0.3 },  
        { option: BiggerExplosion, weight: 0.1 }, 
        { option: OneMoreBomb, weight: 0.1 },  
        { option: Heal, weight: 0.1 },  
        { option: SpeedBoost, weight: 0.1 },  
        { option: Shield, weight: 0.1 },  
        { option: MoreDamage, weight: 0.1 },  
        { option: InverseMovement, weight: 0.1 }
    ];
    
    // Calculate the total weight
    const totalWeight = powerUpOptions.reduce((sum, option) => sum + option.weight, 0);
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows;j++){
            if(grid[i][j].wall == WallType.WALL){
                // Generate a random number between 0 and the total weight
                const randomValue = Math.random() * totalWeight;
                    
                // Choose the option based on the random value and weights
                let selectedPowerUp;
                let currentWeight = 0;

                for (const option of powerUpOptions) {
                    currentWeight += option.weight;
                    if (randomValue <= currentWeight) {
                    selectedPowerUp = option.option;
                    break;
                    }
                }
                if(selectedPowerUp != undefined){
                    powerUps.push( new selectedPowerUp(i,j,SCALE))
                }
            }
        }
    }    
}

function initializeMap(){
    let counter = 0;
    for (let i = 0; i < mapImage.width; i++) {
        for (let j = 0; j < mapImage.height; j++) {
            counter += 1;
            let color = mapImage.get(i,j).toString();
            let wall;
            switch(color){
                case "0,0,0,255":
                    wall = WallType.BARRIER;
                break;
                case "255,0,0,255":
                    wall = WallType.WALL;
                    break;
                case "0,255,0,255":
                    wall = WallType.EMPTY;
                    player1 = new Player(i,j,0.75*SCALE,3,2.8*SCALE,new InputModule(87,65, 83, 68, 32),gameDatas.player1_name,document.getElementById("P1_container"),gameDatas.player1_skindData);
                    break;
                case "0,0,255,255":
                    wall = WallType.EMPTY;
                    player2 = new Player(i,j,0.75*SCALE,3,2.8*SCALE,new InputModule(UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW,13),gameDatas.player2_name,document.getElementById("P2_container"),gameDatas.player2_skindData);
                    break;
                case "255,255,255,255": 
                    wall = WallType.EMPTY;
                    break;
            }
            grid[i][j] = new Cell(i,j,wall);
        }
    }
}

function loadSprites(){
    $.ajax({
        url: '../php/loadAllSprites.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            totalImages = response.length;
            response.forEach(d => { 
                sprites.set(d.ResourceID,loadImage("data:image/png;base64," + d.Sprite,imageLoaded));
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
    })
}


function snapToGrid(value){
    return floor(value/SCALE)*SCALE;
}

function toGridCoords(x,y){
    return [floor(x/SCALE),floor(y/SCALE)];
}

function toPixelCoords(i,j){
    return [i*SCALE,j*SCALE];
}