import { BasicChar } from "./basicChar.js"

const oldman = new Image();
oldman.src = '../sprites/oldman.png';


export class Char extends BasicChar{
    constructor(sourceX, sourceY, width, height, posX, posY, canvas){
        super(oldman, sourceX, sourceY, width, height, posX, posY, canvas);
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

    createShadow(context) {
        context.save();
        context.globalAlpha = 0.5; 
        context.fillStyle = 'black'; 
        context.beginPath();
        context.ellipse(this.posX + (this.width * this.multShadowPosX), (this.posY + (this.height * this.multShadowPosY)), 
            (this.width / this.multShadowWidth), (this.height / this.multShadowHeight), 0, 0, (Math.PI * this.multShadowRotate)); 
        context.fill();
        context.restore();
    }

    renderImage() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
        }
        this.createShadow(this.context)
        this.context.drawImage(this.sprites, 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX , (this.posY - (this.height * (this.sizeMultiplier-1))),
            this.getTrueWidth(), this.getTrueHeight()
        );
    }
}