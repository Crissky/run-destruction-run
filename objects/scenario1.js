import { BasicBackground } from './basicBackground.js'

const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class Scenario1 {
    constructor(canvas, context) {
        this.sky = {
            sourceX: 3,
            sourceY: 3,
            width: 511,
            height: 296,
            posX: 0,
            posY: 0,
            maxWidth: ((Math.ceil((canvas.width / 511)) + 1) * 511),
            sprite: scenario,
            list: [],
        }
        this.floor = {
            sourceX: 3,
            sourceY: 299,
            width: 512,
            height: 323,
            posX: 0,
            posY: (canvas.height - 323),
            maxWidth: ((Math.ceil((canvas.width / 512)) + 1) * 512),
            sprite: scenario,
            list: [],
        }
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
            console.log(model);
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