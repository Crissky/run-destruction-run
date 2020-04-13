import { BasicBackground } from './basicBackground.js'

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const scenario = new Image();
scenario.src = './sprites/cenario.png';

const maxWidthSky = ((Math.ceil((canvas.width / 511)) + 1) * 511);
const maxWidthFloor = ((Math.ceil((canvas.width / 512)) + 1) * 512);

function getScenarioSky(){
    return new BasicBackground(scenario, 3, 3, 511, 296, maxWidthSky, 0,canvas, context);
}

function getScenarioFloor(){
    return new BasicBackground(scenario, 3, 299, 512, 323, maxWidthFloor, (canvas.height - 323), canvas, context);
}

export class Background {
    constructor(){
        this.listSky = [new BasicBackground(scenario, 3, 3, 511, 296, 0, 0,canvas, context), 
            getScenarioSky()]
        this.listFloor = [new BasicBackground(scenario, 3, 299, 512, 323, 0, (canvas.height - 323),canvas, context), 
            getScenarioFloor()]
    }

    renderImage(){
        for(let index = 0; index < this.listSky.length; index++){
            this.listSky[index].renderImage();
        }

        for(let index = 0; index < this.listFloor.length; index++){
            this.listFloor[index].renderImage();
        }
    }

    update(speedScreen){
        if(this.listSky[0].posX <= -(maxWidthSky)){
            let posX = this.listSky[0].posX;
            this.listSky.shift();
            this.listSky.push(getScenarioSky());
            this.listSky[1].posX = (this.listSky[1].posX + (posX + this.listSky[1].posX));
        }

         if(this.listFloor[0].posX <= -(maxWidthFloor)){
            let posX = this.listFloor[0].posX;
            this.listFloor.shift();
            this.listFloor.push(getScenarioFloor());
            this.listFloor[1].posX = this.listFloor[1].posX + (posX + this.listFloor[1].posX);
        }

        for (let index = 0; index < this.listFloor.length; index++) {
            this.listSky[index].posX -= Math.ceil(speedScreen/2);
            this.listFloor[index].posX -= speedScreen 
        }
    }

}