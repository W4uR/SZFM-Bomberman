class Bomb{
    constructor(owner,radius,damage,delay,spriteIndex){
        this.x = snapToGrid(owner.center().x);
        this.y = snapToGrid(owner.center().y);
        this.width = SCALE;
        this.owner = owner;
        this.radius = radius;
        this.damage = damage;
        this.spriteIndex = spriteIndex;
        if(delay > 0){
            setTimeout(() => {
                this.explode();
              }, delay * 1000);
        }
    }

    show(){
        if(sprites[this.spriteIndex]){
            image(sprites[this.spriteIndex], this.x,this.y,this.width,this.width);
        }
    }

    explode(){
        explosions.push(new Explosion(this.x,this.y,this.width,0.6,1,3));
        const [startCol,startRow] = toGridCoords(this.x,this.y);
        print(this.radius);
        for (const [rowChange, colChange] of directions) {
        for (let step = 0; step <= this.radius; step++) {
            const newRow = startRow + rowChange*step;
            const newCol = startCol + colChange*step;
    
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newCol][newRow].isWall() == false) {
                const [explosionX,explosionY] = toPixelCoords(newCol,newRow);
                
                //TODO: a 3-as elég varázslatos szám, jelenleg a 3-as a robbanás indexe a robbanásnak a sprites tömbben. Jobb lenne valami id alapján, vagy konkrétan a képet tárolni? :/
                explosions.push(new Explosion(explosionX,explosionY,this.width,0.6,this.damage,3)) 
                if(grid[newCol][newRow].isBarrier()){
                    grid[newCol][newRow].wall = WallType.EMPTY;
                }
            }else{
                break
            }
        }}
        bombs.shift();
    }

}

class Explosion{
    constructor(x,y,width,lifetime,damage,spriteIndex){
        this.x = x;
        this.y = y;
        this.width = width;
        this.damage = damage;
        this.spriteIndex = spriteIndex;
        setTimeout(() => {
            explosions.shift();
          }, lifetime * 1000);
    }
    show(){
        if(sprites[this.spriteIndex]){
            image(sprites[this.spriteIndex], this.x,this.y,this.width,this.width);
        }
    }
}

