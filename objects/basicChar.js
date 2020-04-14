import { BasicObject } from "./basicObject.js"


export class BasicChar extends BasicObject{
    constructor(sprite, sourceX, sourceY, width, height, posX, posY, canvas, context){
        super(sprite, sourceX, sourceY, width, height, posX, posY, canvas, context)
        this.speedX = 0;
        this.speedY = 0;
    }

    update(){
        if (this.posX < 0 && this.speedX < 0) {
            this.speedX = 0;
            this.posX = 0;
        }
        if ((this.posX + this.width) > this.canvas.width && this.speedX > 0) {
            this.speedX = 0;
            this.posX = this.canvas.width - this.width;
        }
        this.posX += this.speedX;
        this.posY += this.speedY
    }

    moveLeft() {
        this.speedX -= 1
    }

    moveUp() {
        this.speedY -= 1
    }

    moveRight() {
         this.speedX += 1
    }

    moveDown() {
        this.speedY += 1
    }
}