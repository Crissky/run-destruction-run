import { BasicChar } from "../basicChar.js"

const motoJumper = new Image();
motoJumper.src = './sprites/moto-jumper.png';

const motoFlying = new Image();
motoFlying.src = './sprites/moto-flying.png';

const explosion = new Image();
explosion.src = './sprites/explosion2.png';

export class MotorSoldier extends BasicChar{
    constructor(canvas, posX, posY, debug=true){
        super(motoJumper, canvas, 0, 0, 0, 0, posX, posY, 4, 3, 0.1, 4.5, 3.5, 2.8, 1);
        this.maxFrame = null;
        this.currentFrame = 0;
        this.frameTime = 0;
        this.maxFrameTime = 6 * (this.sizeMultiplier);
        this.setImage(); 
    }

    setImage(){
        if (this.status == this.setStatus.RUN) {
            this.maxFrame = 4;
            this.sprites = motoJumper;
        }
        if (this.status == this.setStatus.JUMP) {
            this.maxFrame = 1;
            this.sprites = motoFlying;
        } 
        if (this.status == this.setStatus.ATTACK) {
            this.maxFrame = 24;
            this.sprites = explosion;
        }
        this.setWidthImage()
        this.currentFrame = this.currentFrame % this.maxFrame;
    }

    updateFrame() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
        }
    }

    renderImage() {
        this.updateFrame();
        this.createShadow(0.5, 1, 2, 8, 2);
        this.setImage();
        this.context.drawImage(this.sprites, 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX , (this.posY - (this.height * (this.sizeMultiplier-1))),
            this.getTrueWidth(), this.getTrueHeight()
        );
    }
}