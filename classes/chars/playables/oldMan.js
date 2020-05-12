import { BasicChar } from "../basicChar.js"

const oldmanRun = new Image();
oldmanRun.src = './sprites/oldman.png';

const oldmanJump = new Image();
oldmanJump.src = './sprites/oldman-jump.png';


export class OldMan extends BasicChar{
    constructor(canvas, posX, posY, debug=true){
        super(oldmanRun, canvas, 0, 0, 0, 0, posX, posY, 4, 3, 0.1, 4.5, 3.5, 2.8, 1);
        this.setImage();
        this.debugMode = debug;
        this.maxFrame = 8;
        this.currentFrame = 0;
        this.frameTime = 0;
        this.maxFrameTime = 6 * (this.sizeMultiplier);
          
    }
    
    setImage(){
        if (this.status == this.setStatus.RUN) {
            this.maxFrame = 8;
            this.sprites = oldmanRun;
        }
        if (this.isJump()) {
            this.maxFrame = 5;
            this.sprites = oldmanJump;
        }
        this.setWidthImage();
        this.currentFrame = this.currentFrame % this.maxFrame;
    }

    updateFrame() {
        this.frameTime++
        if (this.frameTime >= this.maxFrameTime) {
            this.frameTime = 0;
            this.currentFrame = ++this.currentFrame%this.maxFrame
            if (this.isJump() && this.speedY >= this.keydownJumpSpeedY) {
                this.currentFrame = 4;
            }
        }
    }

    renderImage() {
        this.updateFrame();
        this.createShadow(0.4, 1, 3, 8, 2);
        this.setImage()
        this.context.drawImage(this.sprites, 
            (this.sourceX * this.currentFrame), this.sourceY, 
            this.width, this.height, 
            this.posX , (this.posY - (this.height * (this.sizeMultiplier-1))),
            this.getTrueWidth(), this.getTrueHeight()
        );
        if(this.debugMode === true){
            this.debugRect();
            this.debugStats();
        }
    }

    debugStats() {
        this.context.save();
        
        this.context.globalAlpha = 0.5;
        this.context.fillStyle = '#000000';
        this.context.fillRect(0,0,230,65);
        this.context.globalAlpha = 1.0;

        this.context.font = '8px Arial';
        this.context.textAlign = 'start';
        this.context.fillStyle = '#ffffff';
        this.context.fillText( ("Oldman PosX:     " + this.posX.toFixed(2)), 5 , 10 );
        this.context.fillText( ("Oldman PosY:     " + this.posY.toFixed(2)), 5 , 25 );
        this.context.fillText( ("Oldman Gravity:  " + this.gravity.toFixed(2)), 5 , 40 );
        this.context.fillText( ("Oldman Status:   " + this.status), 5 , 55 );
        
        this.context.fillText( ("Oldman SpeedX:           " + this.speedX.toFixed(2)), 120 , 10 );
        this.context.fillText( ("Oldman SpeedY:           " + this.speedY.toFixed(2)), 120 , 25 );
        this.context.fillText( ("Oldman currentFrame:  " + this.currentFrame.toFixed(2)), 120 , 40 );
        this.context.fillText( ("Oldman maxFrame:  " + this.maxFrame.toFixed(2)), 120 , 55 );
        
        this.context.restore();
    }
}