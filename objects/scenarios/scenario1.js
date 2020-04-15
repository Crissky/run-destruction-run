import { BasicBackground } from '../bg/basicBackground.js'
import { floor1 } from "../bg/bg-elements/floors.js";
import { sky1 } from "../bg/bg-elements/skies.js";

const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class Scenario1 {
    constructor(canvas, context) {
        this.sky = new sky1(canvas);
        this.floor = new floor1(canvas);
        this.canvas = canvas;
        this.context = context;
    }
    getScenarioElement(model) {
        return new BasicBackground(model.sprite, model.sourceX, model.sourceY, model.width, model.height, model.posX, model.posY, this.canvas, this.context);
    }
    putScenarioElement(model){
        if(model.list.length < 2) {
            var newElement = this.getScenarioElement(model);
            model.list.push(newElement);
            if(model.list.length > 1){
                model.list[1].posX = model.maxWidth + model.list[0].posX;
            }
        }
    }
    removeScenarioElement(model){
        if(model.list[0].posX <= -(model.maxWidth)) {
            model.list.shift();
            this.putScenarioElement(model);
        }
    }
    renderImage(){
        for(let index = 0; index < this.sky.list.length; index++){
            this.sky.list[index].renderImage();
        }

        for(let index = 0; index < this.floor.list.length; index++){
            this.floor.list[index].renderImage();
        }
    }

    update(speedScreen){
        this.putScenarioElement(this.sky);
        this.putScenarioElement(this.floor);
        this.removeScenarioElement(this.sky);
        this.removeScenarioElement(this.floor);

        for (let index = 0; index < this.floor.list.length; index++) {
            this.sky.list[index].posX -= Math.ceil(speedScreen/2);
            this.floor.list[index].posX -= speedScreen 
        }
    }

}