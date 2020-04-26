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

}