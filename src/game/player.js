class Player{
    constructor(i,j,width,maxHealth,speed,inputModule,color){
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
        this.color = color;
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
        
        //TODO: Bomba letétel
        if(keyIsDown(this.inputModule.actionKey)){
            print("asd " + this.color)
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

        // Megnézzük hogy a mozgás hatására falba kerül-e a karakter,
        // ha igen visszacsináljuk a mozgást
        // TODO: Lehetne finomítani, túl könnyű a falba beleakadni
        this.x += xMove;
        if(this.checkWallCollisions()){
            this.x -= xMove;
        }
        this.y += yMove;
        if(this.checkWallCollisions()){
            this.y -= yMove;
        }
    }

    checkExplosion(){
        //TODO
    }

    checkPowerUp(){
        //TODO
    }

    checkWallCollisions(){
        // Talán hatékonyabb lenne csak a közvetlen környezetünkben lévő cellákat vizsgálni,
        // de nem a világ vége. Nem őskövületle fejlesztünk...
		for(var i = 0; i<cols; i++){
			for(var j = 0; j<rows;j++){
				if(grid[i][j].isWall()){
					let wall = grid[i][j];
					if(this.collidesWith(wall)) return true;
				}
			}
		}
		return false;
    }

    collidesWith(other){
        return (this.x + this.width > other.x &&
            other.y + other.width > this.y &&
            other.y < this.y + this.width &&
            other.x + other.width > this.x
        )
    }


    show(){
        //TODO: Sprite megjelenítése és animálása
        fill(this.color);
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

