class Player{
    constructor(i,j,width,maxHealth,speed,inputModule){
        this.x = i*SCALE;
		this.y = j*SCALE;
		this.width = width;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
		this.speed = speed;
		this.inputModule = inputModule;
		this.velocity = createVector(0,0);
		this.bombs= [];
		this.maxBombs = 1;
    }

    update(){
        this.handleInput();
        this.move();
        this.checkExplosion();
        this.checkPowerUp();
    }

    handleInput(){
        //TODO
    }

    move(){
        //TODO
    }

    checkExplosion(){
        //TODO
    }

    checkPowerUp(){
        //TODO
    }

    show(){
        //TODO: Sprite megjelenítése és animálása
        fill(0,255,0);
		rect(this.x,this.y,this.width,this.width);
    }
}

class InputModule{
    constructor(upKey,leftKey,downKey,rightKey,actionKey){
        this.upKey = upKey;
        this.leftKey = leftKey;
        this.downKey = downKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.inverted = false;
    }

    invert(){
        this.upKey = downKey;
        this.leftKey = rightKey;
        this.downKey = upKey;
        this.rightKey = leftKey;
        this.inverted = !this.inverted;
    }
}

