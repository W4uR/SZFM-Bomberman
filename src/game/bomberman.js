const SCALE = 40;
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
    cols = floor(width/SCALE);
    rows = floor(height/SCALE);
    grid = make2DArray(cols,rows);
    initializePlayers();
    initializePowerUps();
    mapImage = loadImage("data:image/png;base64," + gameDatas.mapData,imageLoaded);
    initializeMap();
    noLoop();
}
  
function draw() {
    //Játék logika
    calcDeltaTime();
    //Update bombs
    for (let index = bombs.length-1; index >= 0 ; index--) {
        const element = bombs[index];
        element.update();       
    }
    //Update explosions
    for (let index = explosions.length-1; index >= 0 ; index--) {
        const element = explosions[index];
        element.update();       
    }

    player1.update();
    player2.update();
    
    
    // Gameover
    if(player1.health <= 0 || player2.health <=0){
        tint(120,70,70);
        noLoop();
    }
    //Megjelnés
    renderScene();
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

function initializePlayers(){
    player1 = new Player(1,1,0.75*SCALE,3,2.8*SCALE,new InputModule(87,65, 83, 68, 32),gameDatas.player1_name,document.getElementById("P1_container"),gameDatas.player1_skindData);
    player2 = new Player(9,9,0.75*SCALE,3,2.8*SCALE,new InputModule(UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW,13),gameDatas.player2_name,document.getElementById("P2_container"),gameDatas.player2_skindData);
}

function initializePowerUps(){
   powerUps.push(new OneMoreBomb(2,4,SCALE,0,null,false));
   powerUps.push(new OneMoreBomb(3,5,SCALE,0,null,false));
   powerUps.push(new Heal(5,3,SCALE,0,null,false));
}

function initializeMap(){
    //TODO: Betöltés adatbázisból
    for (let i = 0; i < mapImage.width; i++) {
        for (let j = 0; j < mapImage.height; j++) {
            loadPixels();
            let color = mapImage.get(i,j);
            let wall;
            switch(color){
                case "rgb(0, 0, 0)":
                    wall = WallType.WALL;
                    break;
                case "rgb(255, 0, 0)":
                    wall = WallType.BARRIER;
                    break;
                case "rgb(255, 255, 255)": 
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
            totalImages = response.length+1;
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
