class Bomb{
    constructor(owner,radius,damage,delay,spriteIndex){
        this.x = snapToGrid(owner.center().x);
        this.y = snapToGrid(owner.center().y);
        this.width = SCALE;
        this.owner = owner;
        this.radius = radius;
        this.damage = damage;
        this.spriteIndex = spriteIndex;
        setTimeout(() => {
            this.explode();
          }, delay * 1000);
    }

    show(){
        if(sprites[this.spriteIndex]){
            image(sprites[this.spriteIndex], this.x,this.y,this.width,this.width);
        }
    }

    explode(){
        print("Explode");
        bombs.shift();
    }

}