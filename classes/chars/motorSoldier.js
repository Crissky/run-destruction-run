import { BasicChar } from "./basicChar.js"

const motoJumper = new Image();
motoJumper.src = './sprites/moto-jumper.png';

export class MotorSoldier extends BasicChar{
    constructor(canvas, sourceX, sourceY, width, height, posX, posY, debug=true){
        super(motoJumper, canvas, sourceX, sourceY, width, height, posX, posY, 4, 3, 0.1, 4.5, 3.5, 2.8, 1);
        this.shadowHeight = height;
        this.shadowWidth = this.getTrueWidth();
        this.maxFrame = 4;
        this.currentFrame = 0;
        this.frameTime = 0;
        this.maxFrameTime = 6 * (this.sizeMultiplier);  
    }

    /*
    getImage(){
        let sprite;
        if (this.status == this.setStatus.RUN) {
            this.maxFrame = 8;
            this.height = 41;
            sprite = oldmanRun;
        }
        if (this.isJump()) {
            this.maxFrame = 5;
            this.height = 44;
            sprite = oldmanJump;
        }
        this.currentFrame = this.currentFrame % this.maxFrame;
        return sprite;
    }
    */
    updateFrame() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
        }
    }

    renderImage() {
        this.updateFrame();
        this.createShadow(this.shadowWidth, this.shadowHeight, 0.5, 1, 2, 8, 2);
        this.context.drawImage(motoJumper, 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX , (this.posY - (this.height * (this.sizeMultiplier-1))),
            this.getTrueWidth(), this.getTrueHeight()
        );
    }
}