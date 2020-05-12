import { BasicObject } from "../basicObject.js"


export class BasicChar extends BasicObject{
    constructor(sprites, canvas, sourceX, sourceY, width, height, posX, posY, speedBack, speedFront, gravity=0.1, keydownJumpSpeedY=4.5, jumpSpeedY=3.5, doublejumpSpeedY=2.8, sizeMultiplier=1){
        super(sprites, canvas, sourceX, sourceY, width, height, posX, posY, sizeMultiplier)
        this.speedX = 0;
        this.speedY = 0;
        this.speedFront = speedFront;
        this.speedBack = speedBack;
        this.gravity = gravity;
        this.floorHeight = posY;
        this.status = this.setStatus.RUN;
        this.keydownJumpSpeedY = keydownJumpSpeedY;
        this.jumpSpeedY = jumpSpeedY;
        this.doublejumpSpeedY = doublejumpSpeedY;
    }

    setWidthImage(){
        this.sourceX = (this.sprites.width / this.maxFrame);
        this.width = (this.sprites.width / this.maxFrame);
        this.height = this.sprites.height;
    }

    update(){
        if (this.posX <= 0 && this.speedX < 0) {
            this.speedX = 0;
            this.posX = 0;
        }
        if ((this.posX + this.getTrueWidth()) >= this.canvas.width && this.speedX > 0) {
            this.speedX = 0;
            this.posX = this.canvas.width - this.getTrueWidth();
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

    createShadow(multShadowPosX, multShadowPosY, multShadowWidth, multShadowHeight, multShadowRotate) {
        let shadowHeight = 41;
        let shadowWidth = this.getTrueWidth();
        this.context.save();
        this.context.globalAlpha = 0.5; 
        this.context.fillStyle = 'black'; 
        this.context.beginPath();
        this.context.ellipse(this.posX + (shadowWidth * multShadowPosX), (this.floorHeight + (shadowHeight * multShadowPosY)), 
                            (shadowWidth / multShadowWidth), (shadowHeight / multShadowHeight), 0, 0, (Math.PI * multShadowRotate));
        this.context.fill();
        this.context.restore();
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
        this.speedX = -this.speedBack;
    }

    keydownRight() {
         this.speedX = this.speedFront;
    }

    keydownUp() {
        if (this.status == this.setStatus.STAND || this.status == this.setStatus.RUN || this.status == this.setStatus.CROUCH) {
            this.status = this.setStatus.JUMP;
            this.speedY = -this.jumpSpeedY;
        } else if (this.status == this.setStatus.JUMP) {
            this.status = this.setStatus.DOUBLEJUMP;
            this.speedY = -this.doublejumpSpeedY;
        }
    }

    keydownDown() {
        if (this.isJump() && this.speedY < this.keydownJumpSpeedY) {
            this.speedY = this.keydownJumpSpeedY;
        }
    }

    keyupLeft() {
        this.speedX = 0;
    }
    
    keyupRight() {
         this.speedX = 0;
    }

    keyupUp() {
    }

    keyupDown() {
    }
}