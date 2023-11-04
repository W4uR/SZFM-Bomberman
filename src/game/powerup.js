class PowerUp{
    constructor(i,j,width){
        [this.x,this.y] = toPixelCoords(i,j);
        this.width = width;
        this.collectedBy = undefined;
        this.isCollected = false;
    }

    // Ezt akkor kell meghívni, ha szeretnénk, hogy a felvett erősítés megjelenjen a játékos statjainál (Pl.L Healnál talán elhagyható)
    applyEffect(player){
        let imgElement = document.createElement("img");
        imgElement.src = sprites.get(this.getSpriteKey()).canvas.toDataURL();
        player.powerUpsDisplay.appendChild(imgElement);
    }

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
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        player.bombTemplate.radius += 1;
        this.isCollected = true;
        this.collectedBy = player;
        super.applyEffect(player);
    }
}

class OneMoreBomb extends PowerUp {
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        player.maxBombs += 1;
        this.isCollected = true;
        this.collectedBy = player;
        super.applyEffect(player);
    }
}

class Heal extends PowerUp {
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        if(player.health < player.maxHealth){
            player.health += 1;
            this.isCollected = true;
            this.collectedBy = player;
            super.applyEffect(player);
        }
    }
}

class SpeedBoost extends PowerUp {
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        player.speed += 0.25;
        this.isCollected = true;
        this.collectedBy = player;
        super.applyEffect(player);
    }
}

class Shield extends PowerUp {
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        if(player.isShielded == false){
            player.isShielded = true;
            this.isCollected = true;
            this.collectedBy = player;
            super.applyEffect(player);
        }
    }
}

class MoreDamage extends PowerUp {
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        player.bombTemplate.damage += 1;
        this.isCollected = true;
        this.collectedBy = player;
        super.applyEffect(player);
    }
}

class InverseMovement extends PowerUp{
    constructor(i,j,width){
        super(i,j,width);
    }
    applyEffect(player){
        this.isCollected = true;
        this.collectedBy = player;
        if(player === player1){
            player2.inputModule.invert();
            super.applyEffect(player2);
        }else{
            player1.inputModule.invert();
            super.applyEffect(player1);
        }
    }
}

//TODO: make the necessary changes in bomberman js and the others