import { BasicObject } from "../../basicObject.js";

const scenario = new Image();
scenario.src = './run-destruction-run/sprites/scenario.png';

export class Floor1 extends BasicObject{
    constructor(canvas, sizeMultiplier) {
        super(scenario, canvas,
            3, 299,
            512, 323,
            0, (canvas.height - 323),
            sizeMultiplier);
    }
}