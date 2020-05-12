import { MotorSoldier } from "./enemies/motorSoldier.js";


export class HandlerMotorSoldier {
    constructor(canvas, posY, debug=true){
        this.canvas = canvas;
        this.posY = posY;
        this.debug = debug;
        this.motorSoldierList = [];
    }

    addMotorSoldier(){
        const motorSoldier = new MotorSoldier();
        this.motorSoldierList.push(motorSoldier);
    }
}