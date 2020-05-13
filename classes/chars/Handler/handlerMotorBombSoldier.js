import { MotorBombSoldier } from "./enemies/motorBombSoldier.js";


export class HandlerMotorBombSoldier {
    constructor(canvas, posY, debug=true){
        this.canvas = canvas;
        this.posY = posY;
        this.debug = debug;
        this.motorBombSoldierList = [];
    }

    addMotorSoldier(){
        const motorBombSoldier = new MotorBombSoldier();
        this.motorBombSoldierList.push(motorBombSoldier);
    }
}