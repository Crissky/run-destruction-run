import { BasicObject } from "./basicObject.js"
import { BasicChar } from "./basicChar.js"

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const oldman = new Image();
oldman.src = '../sprites/oldman.png';


export class Char extends BasicObject{
    constructor(sourceX, sourceY, width, height, posX, posY){
        super(oldman, sourceX, sourceY, width, height, posX, posY, canvas, context)
    this.currentFrame = 0;
    this.maxFrame = 8;
    this.frameTime = 0;
    this.maxFrameTime = 5;
    this.multShadowPosX = 1.45;
    this.multShadowPosY = 2;
    this.multShadowWidth = 3;
    this.multShadowHeight = 8;
    this.multShadowRotate = 2;

    }
    renderImage() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
        }
        context.save();
        context.globalAlpha = 0.5; 
        context.fillStyle = 'black'; 
        context.beginPath();
        context.ellipse(this.posX + (this.width * this.multShadowPosX), (this.posY + (this.height * this.multShadowPosY)), 
            (this.width / this.multShadowWidth), (this.height / this.multShadowHeight), 0, 0, (Math.PI * this.multShadowRotate)); 
        context.fill();
        context.restore();

        this.context.drawImage(this.sprites, 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX + this.width, this.posY + this.height,
            this.width, this.height
        );
    }
}