import { BasicElement } from "./basicElement.js";

const scenario = new Image();
scenario.src = '../sprites/scenario.png';

export class Floor1 extends BasicElement{
    constructor(canvas, speedMultiplier=1, updateWaitTime=0) {
        super(scenario,
            3, 299,
            512, 323,
            0, (canvas.height - 323),
            canvas,
            speedMultiplier, updateWaitTime);
    }
}