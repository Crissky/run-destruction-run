export class BasicObject {
    constructor(sprites, spriteX, spriteY, width, height, posX, posY, canvas, context) {
        this.sprites = sprites;
        this.spriteX = spriteX;
        this.spriteY = spriteY;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.canvas = canvas;
        this.context = context;
    }

    renderImage() {
        this.context.drawImage(this.sprites, 
            this.spriteX, this.spriteY, 
            this.width, this.height, 
            this.posX, this.posY,
            this.width, this.height);
    }

    update() {
        this.renderImage();
    };

};