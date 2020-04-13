export class BasicObject {
    constructor(sprites, sourceX, sourceY, width, height, posX, posY, canvas, context) {
        this.sprites = sprites;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.canvas = canvas;
        this.context = context;
    }

    renderImage() {
        this.context.drawImage(this.sprites, 
            this.sourceX, this.sourceY, 
            this.width, this.height, 
            this.posX + this.width, this.posY + this.height,
            this.width, this.height
        );
    }

    update(speedScreen) {
        this.renderImage();
    }

}