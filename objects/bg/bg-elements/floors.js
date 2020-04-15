const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class floor1 {
        constructor(canvas) {
            this.sourceX =  3;
            this.sourceY =  299;
            this.width =  512;
            this.height = 323;
            this.posX = 0;
            this.posY = (canvas.height - 323);
            this.maxWidth = ((Math.ceil((canvas.width / 512)) + 1) * 512);
            this.sprite = scenario;
            this.list = [];
    }
}