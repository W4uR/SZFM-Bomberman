const SCALE = 50;

var grid;
var cols;
var rows;

function setup() {
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
}
  
function draw() {
    background(255);
    //Játék logika

    //Megjelenés
    renderScene();
}
function renderScene(){
    //Bombák rednerelése

    //Erősítések renderelése

    //Játékosok renderelése

    //Pálya rednerelése
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows;j++){
            grid[i][j].show();
        }
    }
    //Robbanások renderelése
}

function make2DArray(cols,rows){
    var arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}