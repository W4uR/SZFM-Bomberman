class Player{
    constructor(i,j,width,maxHealth,speed,inputModule,spriteIndex){
        this.x = i*SCALE;
		this.y = j*SCALE;
		this.width = width;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
		this.speed = speed;
		this.inputModule = inputModule;
		this.velocity = createVector(0,0);
		this.maxBombs = 5;
        this.spriteIndex = spriteIndex;
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
            this.placeBomb();
        }
    }
    
    checkBombValidity(){
        let count = 0;
        
        for (let index = 0; index < bombs.length; index++) {
            const b = bombs[index];
            if(b.owner == this){
                count++;
                if(count >= this.maxBombs){
                    return false //A játékos már lettet annyi bombát amennyit elhetett neki.
                }
            }
            if(b.x == snapToGrid(this.center().x) && b.y == snapToGrid(this.center().y)){
                return false //A célmezőn már van egy bomba
            }
        }
        return true;
    }

    placeBomb(){
        if(this.checkBombValidity()){
            print("Placing bomb...");
            bombs.push(new Bomb(this,1,1,10,2));
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
        if(sprites[this.spriteIndex]){
            image(sprites[this.spriteIndex], this.x,this.y,this.width,this.width);
        }
    }

    center(){
        return createVector(this.x+this.width/2,this.y+this.width/2);
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

