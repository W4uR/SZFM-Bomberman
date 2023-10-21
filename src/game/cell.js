class Cell{

    constructor(i,j,wallType){
        [this.x,this.y] = toPixelCoords(i,j);
        this.width = SCALE;
        this.wall = wallType;
    }

    isWall(){
        return this.wall == WallType.WALL;
    }

    isBarrier(){
        return this.wall == WallType.BARRIER;
    }
    
    isEmpty(){
        return this.wall == WallType.EMPTY;
    }

    show(){
        if(this.wall == WallType.EMPTY) return;
        if(sprites.has("CELL_"+this.wall)){
            image(sprites.get("CELL_"+this.wall),this.x,this.y,this.width,this.width)
        }
    }
}

class WallType {
    static EMPTY = 'empty';
    static WALL = 'wall'; // Rombolható
    static BARRIER = 'barrier'; // Nem rombolható
}

