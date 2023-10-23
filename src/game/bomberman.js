const SCALE = 40;
const directions = [
    [-1, 0], // Fel
    [1, 0],  // Le
    [0, -1], // Balra
    [0, 1]   // Jobbra
  ];
const playerDatas = JSON.parse(sessionStorage.getItem("playerDatas"));
let previousTime;

let deltaTime;
let grid;
let cols;
let rows;
const sprites = new Map();

let bombs = [];
let explosions = [];
let powerUps = [];

let player1;
let player2;

function preload(){
    loadSprites();
}

function setup() {
    previousTime = millis();
    createCanvas(600, 600, document.getElementById("canvas"));
    noStroke();
    cols = floor(width/SCALE);
    rows = floor(height/SCALE);
    grid = make2DArray(cols,rows);
    initializePlayers();
    initializePowerUps();
    initializeMap();
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
    print(playerDatas);
    player1 = new Player(1,1,0.75*SCALE,3,2.8*SCALE,new InputModule(87,65, 83, 68, 32),playerDatas.player1_name,document.getElementById("P1_container"),playerDatas.player1_skindData);
    player2 = new Player(9,9,0.75*SCALE,3,2.8*SCALE,new InputModule(UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW,13),playerDatas.player2_name,document.getElementById("P2_container"),playerDatas.player2_skindData);
}

function initializePowerUps(){
   powerUps.push(new OneMoreBomb(1,4,SCALE,0,null,false));
   powerUps.push(new OneMoreBomb(3,4,SCALE,0,null,false));
   powerUps.push(new Heal(5,4,SCALE,0,null,false));
}

function initializeMap(){
    //TODO: Betöltés adatbázisból
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows;j++){
            let wall = WallType.EMPTY;
            if(i==0|| i==cols-1){
                wall = WallType.BARRIER;
            }
            if(j==0 || j==rows-1 || i%2 == 0 && j%2==0){
                wall = WallType.WALL;
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
            response.forEach(d => { 
                sprites.set(d.ResourceID,loadImage("data:image/png;base64," + d.Sprite));
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
