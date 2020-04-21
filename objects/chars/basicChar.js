import { BasicObject } from "../basicObject.js"


export class BasicChar extends BasicObject{
    constructor(sprites, sourceX, sourceY, width, height, posX, posY, canvas, sizeMultiplier=1){
        super(sprites, sourceX, sourceY, width, height, posX, posY, canvas, sizeMultiplier)
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0.1;
        this.floorHeight = posY;
        this.status = this.setStatus.RUN;
    }

    update(){
        if (this.posX <= 0 && this.speedX < 0) {
            this.speedX = 0;
            this.posX = 0;
        }
        if ((this.posX + this.width) >= this.canvas.width && this.speedX > 0) {
            this.speedX = 0;
            this.posX = this.canvas.width - this.width;
        }
        if (this.isJump()) {
            this.speedY += this.gravity;
        }
        if (this.isJump() && this.posY >= this.floorHeight && this.speedY > 0) {
            this.speedY = 0;
            this.posY = this.floorHeight;
            this.status = this.setStatus.RUN;
        }
        this.posX += this.speedX;
        this.posY += this.speedY;
    }

    isJump(){
        return (this.status == this.setStatus.JUMP || this.status == this.setStatus.DOUBLEJUMP);
    }

    setStatus = {
        RUN: 'run',
        STAND: 'stand',
        DOUBLEJUMP: 'doublejump',
        JUMP: 'jump',
        CROUCH: 'crouch',
        ATTACK: 'attack'
    }

    keydownLeft() {
        this.speedX = -4;
    }

    keydownUp() {
        if (this.status == this.setStatus.STAND || this.status == this.setStatus.RUN || this.status == this.setStatus.CROUCH) {
            this.status = this.setStatus.JUMP;
            this.speedY = -3.5;
        } else if (this.status == this.setStatus.JUMP) {
            this.status = this.setStatus.DOUBLEJUMP;
            if (this.speedY > 0) {
                this.speedY = -3;
            } else {
                this.speedY -= 3;
            }            
        }
    }

    keydownRight() {
         this.speedX = 3;
    }

    keydownDown() {
        let fixedSpeedY = 4.5;
        if (this.isJump() && this.speedY < fixedSpeedY) {
            this.speedY = fixedSpeedY;
        }
    }
    keyupLeft() {
        this.speedX = 0;
    }

    keyupUp() {
    }

    keyupRight() {
         this.speedX = 0;
    }

    keyupDown() {
    }
}