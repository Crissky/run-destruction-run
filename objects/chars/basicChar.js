import { BasicObject } from "../basicObject.js"


export class BasicChar extends BasicObject{
    constructor(sprites, sourceX, sourceY, width, height, posX, posY, canvas, sizeMultiplier=1){
        super(sprites, sourceX, sourceY, width, height, posX, posY, canvas, sizeMultiplier)
        this.speedX = 0;
        this.speedY = 0;
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
        this.posX += this.speedX;
        this.posY += this.speedY
    }

    keydownLeft() {
        this.speedX = -4
    }

    keydownUp() {
        this.speedY = 0
    }

    keydownRight() {
         this.speedX = 3
    }

    keydownDown() {
        this.speedY = 0
    }
    keyupLeft() {
        this.speedX = 0
    }

    keyupUp() {
        this.speedY = 0
    }

    keyupRight() {
         this.speedX = 0
    }

    keyupDown() {
        this.speedY = 0
    }
}