import { BasicBackground } from './basicBackground.js'

const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class Scenario1 {
    constructor(canvas, context){
        this.listSky = [new BasicBackground(scenario, 3, 3, 511, 296, 0, 0,canvas, context)]
        this.listFloor = [new BasicBackground(scenario, 3, 299, 512, 323, 0, (canvas.height - 323),canvas, context)]
        this.maxWidthSky = ((Math.ceil((canvas.width / 511)) + 1) * 511);
        this.maxWidthFloor = ((Math.ceil((canvas.width / 512)) + 1) * 512);
    }

    getScenarioSky(){
        return new BasicBackground(scenario, 3, 3, 511, 296, this.maxWidthSky, 0,canvas, context);
    }
    
    getScenarioFloor(){
        return new BasicBackground(scenario, 3, 299, 512, 323, this.maxWidthFloor, (canvas.height - 323), canvas, context);
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
        if (this.listSky.length < 2) {
            this.listSky.push(this.getScenarioSky());
        }
        if (this.listFloor.length < 2) {
            this.listFloor.push(getScenarioFloor());
        }
        if(this.listSky[0].posX <= -(this.maxWidthSky)){
            let posX = this.listSky[0].posX;
            this.listSky.shift();

            
            this.listSky.push(getScenarioSky());
            this.listSky[1].posX = (this.listSky[1].posX + (posX + this.listSky[1].posX));
        }

         if(this.listFloor[0].posX <= -(this.maxWidthFloor)){
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