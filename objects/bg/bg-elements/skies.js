const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class sky1 {
    constructor(canvas){
        this.sourceX = 3;
        this.sourceY = 3;
        this.width = 511;
        this.height = 296;
        this.posX = 0;
        this.posY = 0;
        this.maxWidth = ((Math.ceil((canvas.width / 511)) + 1) * 511);
        this.sprite = scenario;
        this.list = [];
    }
}