class Bomb{
    constructor(owner,radius,damage,lifetime){
        this.x = snapToGrid(owner.center().x);
        this.y = snapToGrid(owner.center().y);
        this.width = SCALE;
        this.owner = owner;
        this.radius = radius;
        this.damage = damage;
        this.lifetime = lifetime;
    }

    update(){
        if(this.lifetime == undefined) return;
        this.lifetime-=deltaTime;
        if(this.lifetime <= 0){
            this.explode();
        }
    }

    getSpriteKey(){
        return this.constructor.name.toUpperCase();
    }

    show(){ 
        if(sprites.has(this.getSpriteKey())){
            image(sprites.get(this.getSpriteKey()),this.x,this.y,this.width,this.width);
        }
    }


    explode(){
        explosions.push(new Explosion(this.x,this.y,this.width,0.6,this.damage)) 
        const [startCol,startRow] = toGridCoords(this.x,this.y);
        for (const [rowChange, colChange] of directions) {
        for (let step = 1; step <= this.radius; step++) {
            const newRow = startRow + rowChange*step;
            const newCol = startCol + colChange*step;
    
            if (newRow >= 0 && newRow < rows 
                && newCol >= 0 && newCol < cols 
                && grid[newCol][newRow].isBarrier() == false) {
                const [explosionX,explosionY] = toPixelCoords(newCol,newRow);
                
                //TODO: a 3-as elég varázslatos szám, jelenleg a 3-as a robbanás indexe a robbanásnak a sprites tömbben. Jobb lenne valami id alapján, vagy konkrétan a képet tárolni? :/
                explosions.push(new Explosion(explosionX,explosionY,this.width,0.6,this.damage)) 
                if(grid[newCol][newRow].isWall()){
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
    constructor(x,y,width,lifetime,damage){
        this.x = x;
        this.y = y;
        this.width = width;
        this.damage = damage;
        this.lifetime = lifetime;
    }
    update(){
        this.lifetime-=deltaTime;
        if(this.lifetime <= 0){
          explosions.splice(explosions.indexOf(this),1);
        }
    }

    getSpriteKey(){
        return this.constructor.name.toUpperCase();
    }

    show(){ 
        if(sprites.has(this.getSpriteKey())){
            image(sprites.get(this.getSpriteKey()),this.x,this.y,this.width,this.width);
        }
    }
}

