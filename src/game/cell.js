class Cell{

    constructor(i,j,wallType){
        this.x = i*SCALE;
        this.y = j*SCALE;
        this.width = SCALE;
        this.wall = wallType;
    }

    isWall(){
        return this.wall != WallType.EMPTY;
    }

    show(){

        //Rendering walls
        //TODO: Render sprites
        switch (this.wall) {
            case WallType.BARRIER:
              fill(255,30,30);
              break;
            case WallType.WALL:
              fill(120,70,30);
              break;
            case WallType.EMPTY:
            default:  
              noFill();
          }
        rect(this.x,this.y,this.width,this.width);
    }
}

class WallType {
    static EMPTY = 'empty';
    static WALL = 'wall';
    static BARRIER = 'barrier';
}

