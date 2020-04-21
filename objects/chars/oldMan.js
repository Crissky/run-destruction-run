import { BasicChar } from "./basicChar.js"

const oldmanRun = new Image();
oldmanRun.src = '../sprites/oldman.png';

const oldmanJump = new Image();
oldmanJump.src = '../sprites/oldman jump.png';


export class Char extends BasicChar{
    constructor(sourceX, sourceY, width, height, posX, posY, canvas){
        super(oldmanRun, sourceX, sourceY, width, height, posX, posY, canvas);
        this.currentFrame = 0;
        this.maxFrame = 8;
        this.frameTime = 0;
        this.maxFrameTime = 5;
        this.multShadowPosX = 0.4;
        this.multShadowPosY = 1;
        this.multShadowWidth = 3;
        this.multShadowHeight = 8;
        this.multShadowRotate = 2;   
    }

    getImage(){
        if (this.status == this.setStatus.RUN) {
            this.maxFrame = 8;
            this.height = 41;
            return oldmanRun;
        }
        if (this.isJump()) {
            this.maxFrame = 5;
            this.height = 44;
            return oldmanJump;
        }
    }

    createShadow(context) {
        context.save();
        context.globalAlpha = 0.5; 
        context.fillStyle = 'black'; 
        context.beginPath();
        context.ellipse(this.posX + (this.width * this.multShadowPosX), (this.floorHeight + (this.height * this.multShadowPosY)), 
            (this.width / this.multShadowWidth), (this.height / this.multShadowHeight), 0, 0, (Math.PI * this.multShadowRotate)); 
        context.fill();
        context.restore();
    }

    updateFrame() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
            if (this.isJump() && this.speedY >= this.fixedSpeedY) {
                this.currentFrame = 4;
            }
        }
    }

    renderImage() {
        this.updateFrame();
        this.createShadow(this.context);
        this.context.drawImage(this.getImage(), 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX , (this.posY - (this.height * (this.sizeMultiplier-1))),
            this.getTrueWidth(), this.getTrueHeight()
        );
    }
}