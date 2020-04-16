import { BackgroundSky1 } from '../bg/backgroundSkies.js';
import { BackgroundFloor1 } from '../bg/backgroundFloors.js';

const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class Scenario1 {
    constructor(canvas, context) {
        this.backgroundList = [new BackgroundSky1(canvas, 0.65), new BackgroundFloor1(canvas)];
        this.canvas = canvas;
        this.context = context;
    }

    putBackgroundElement(background){
        if(background.elementList.length < background.getMaxNumHorizontalElements()) {
            var newElement = background.createElement();
            background.elementList.push(newElement);
            if(background.elementList.length > 1) {
                let lastIndex = (background.elementList.length - 1);
                background.elementList[lastIndex].posX = background.elementList[(lastIndex-1)].posX + background.elementList[(lastIndex-1)].getTrueWidth() - 1;
            }
        }
    }

    removeBackgroundElement(background){
        if(background.elementList[0].posX <= -(background.elementList[0].getTrueWidth())) {
            background.elementList.shift();
            this.putBackgroundElement(background);
        }
    }

    renderImage(){
        this.backgroundList.forEach(background => {
            background.renderImage();
        });
    }

    update(speedScreen){
        this.backgroundList.forEach(background => {
            this.putBackgroundElement(background);
            this.removeBackgroundElement(background);
            background.update(speedScreen);
        });
    }
}