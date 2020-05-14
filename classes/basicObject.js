export class BasicObject {
    constructor(sprites, canvas, sourceX, sourceY, width, height, posX, posY, sizeMultiplier=1) {
        this.sprites = sprites;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.sizeMultiplier = sizeMultiplier;
    }

    renderImage() {
        this.context.drawImage(this.sprites, 
            this.sourceX, this.sourceY, 
            this.width, this.height, 
            this.posX, this.posY,
            this.getTrueWidth(), this.getTrueHeight()
        );
    }

    update(speedScreen) {
        this.renderImage();
    }

    getTrueWidth(){
        return Math.floor(this.width * this.sizeMultiplier);
    }

    getTrueHeight(){
        return Math.floor(this.height * this.sizeMultiplier);
    }

    debugRect() { }
	
	getCenterPos() {
        let mPosX = this.getCenterPosX();
        let mPosY = this.getCenterPosY();

        return { posX: mPosX, posY: mPosY };
    }
    getCenterPosX() {
        return this.posX + (this.getTrueWidth() / 2);
    }
    getCenterPosY() {
        return this.posY + (this.getTrueHeight() / 2);
    }
    getEndPosX() {
        return this.posX + this.getTrueWidth();
    }
    getEndPosY() {
        return this.posY + this.getTrueHeight();
    }

    setCenterPosX(centerPosX) {
        this.posX = centerPosX - (this.getTrueWidth() / 2);
    }
    setCenterPosY(centerPosY) {
        this.posY = centerPosY - (this.getTrueHeight() / 2);
    }
    setCenterPos(centerPos) {
        this.posX = this.setCenterPosX(centerPos);
        this.posY = this.setCenterPosY(centerPos);
    }
}