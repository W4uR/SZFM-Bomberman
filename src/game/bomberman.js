const SCALE = 40;
let previousTime;

let deltaTime;
let grid;
let cols;
let rows;

let sprites = []; 


let player1;
let player2;

function preload(){
    loadSprites();
}

function setup() {
    previousTime = millis();
    noStroke();
    createCanvas(600, 600);
    cols = floor(width/SCALE);
    rows = floor(height/SCALE);
    grid = make2DArray(cols,rows);
    initializePlayers();

    //Grid feltöltése
    //TODO: Itt kéne a pályát definiálni úgymond...
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
  
function draw() {
    //Játék logika
    calcDeltaTime();
    player1.update();
    player2.update();

    //Megjelnés
    renderScene();
}

function renderScene(){
    background(255);
    //Bombák rednerelése

    //Erősítések renderelése

    //Játékosok renderelése
    player1.show();
    player2.show();
    //Pálya rednerelése
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows;j++){
            grid[i][j].show();
        }
    }
    //Robbanások renderelése
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
    player1 = new Player(1,1,0.75*SCALE,3,4*SCALE,new InputModule(87,65, 83, 68, 32),0);
    player2 = new Player(9,9,0.75*SCALE,3,4*SCALE,new InputModule(UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW,13),1);
}

function loadSprites() {
    $.ajax({
        url: '../php/retrive.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            for (let i = 0; i < data.length; i++) {
                sprites.push(loadImage("data:image/png;base64,"+ data[i].imgData));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', errorThrown);
        }
        });  
    
  }
