const SCALE = 40;
let previousTime;

var deltaTime;
var grid;
var cols;
var rows;


var player1;
var player2;

function setup() {
    previousTime = millis();
    noStroke();
    createCanvas(600, 600);
    cols = floor(width/SCALE);
    rows = floor(height/SCALE);
    grid = make2DArray(cols,rows);

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
    print(grid)
    // Játékosok inicializálása
    player1 = new Player(1,1,0.75*SCALE,3,4*SCALE,new InputModule(87,65, 83, 68, 32),'green')
    player2 = new Player(9,9,0.75*SCALE,3,4*SCALE,new InputModule(UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW,13),'blue')
}
  
function draw() {
    //Játék logika
    calcDeltaTime();
    player1.update();
    player2.update();

    //Megjelenés
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