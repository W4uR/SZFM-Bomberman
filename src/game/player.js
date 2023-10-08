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
        //Vertikális mozgás
        if (keyIsDown(this.inputModule.upKey)) {
            this.velocity.y = -1 // Fel
        } else if (keyIsDown(this.inputModule.downKey)) {
            this.velocity.y = 1; // Le
        } else {
            this.velocity.y  = 0; // Megáll
        }
      
        //Horizontális mozgás
        if (keyIsDown(this.inputModule.leftKey)) {
            this.velocity.x = -1; // Bal
        } else if (keyIsDown(this.inputModule.rightKey)) {
            this.velocity.x = 1; // Jobb
        } else {
            this.velocity.x = 0; // Megáll
        }
        
        
    }

    move(){
        //Irányvektor normaliálása
        if(this.velocity.mag() > 0){
            this.velocity.normalize();
            this.velocity.mult(this.speed);
        }
        const xMove = this.velocity.x * deltaTime;
        const yMove = this.velocity.y * deltaTime;
        this.x += xMove;
        this.y += yMove;
        //TODO: Ütközés a falakkal detektálása, mozgás korlátozás
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

