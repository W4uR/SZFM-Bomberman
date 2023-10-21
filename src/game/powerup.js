class PowerUp{
    constructor(i,j,width,duartion,collectedBy,isCollected){
        [this.x,this.y] = toPixelCoords(i,j);
        this.width = width;
        this.duartion = duartion;
        this.collectedBy = collectedBy;
        this.isCollected = isCollected;
    }

    applyEffect(player){}

    getSpriteKey(){
        return "PU_"+this.constructor.name;
    }

    show(){
        if(sprites.has(this.getSpriteKey()) && !this.isCollected){
            image(sprites.get(this.getSpriteKey()),this.x,this.y,this.width,this.width);
        }
    }
    

}

class BiggerExplosion extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        player.bombTemlate.radius += 1;
        this.isCollected = true;
    }
}

class OneMoreBomb extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        player.maxBombs += 1;
        this.isCollected = true;
    }
}

class Heal extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        if(player.health < player.maxHealth){
            player.health += 1;
            this.isCollected = true;
        }
    }
}

class SpeedBoost extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        player.speed += 0.25;
        this.isCollected = true;
    }
}

class Shield extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        player.isShielded = true;
        this.isCollected = true;
    }
}

class MoreDamage extends PowerUp {
    constructor(i,j,width,duartion,collectedBy,isCollected,spriteIndex){
        super(i,j,width,duartion,collectedBy,isCollected,spriteIndex);
    }
    applyEffect(player){
        player.bombTemlate.damage += 1;
        this.isCollected = true;
    }
}

//TODO: make the necessary changes in bomberman js and the others