export class BasicElement {
    constructor(sprite, sourceX, sourceY, width, height, posX, posY, canvas, speedMultiplier=0, updateWaitTime=0) {
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.maxWidth = ((Math.ceil((canvas.width / width)) + 1) * width);
        this.sprite = sprite;
        this.list = [];
        this.speedMultiplier = speedMultiplier;
        this.updateWaitTime = updateWaitTime;
        this.currentUpdateTime = 0;
    }
    
    update(speedScreen) {
        this.currentUpdateTime++;
        if(this.currentUpdateTime >= this.updateWaitTime){
            this.currentUpdateTime = 0;
            for (let index = 0; index < this.list.length; index++) {
                this.list[index].posX -= Math.ceil(speedScreen * this.speedMultiplier);
            }
        }
    }
}