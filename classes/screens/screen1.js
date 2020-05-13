import { Scenario1 } from "../scenarios/scenario1.js";
import { OldMan } from "../chars/playables/oldMan.js";
import { MotorSoldier } from "../chars/enemies/motorSoldier.js";
import { MotorBombSoldier } from "../chars/enemies/motorBombSoldier.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

class GameStart {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        //scenario1.renderImage();

    }

    update(){
        //scenario1.update(this.speed)
    }
}

class GamePlay {
    constructor(debug=true){
        this.speed = 2;
        this.debug = debug;
        this.scenario1 = new Scenario1(canvas, context);
        this.oldman = new OldMan(canvas, 30, 361, this.debug);
        this.motorBombSoldier = new MotorBombSoldier(canvas, 100, 361, this.debug);
    }
    

    renderImage() {
        context.clearRect(0,0,canvas.width, canvas.height); // Clean Screen
        this.scenario1.renderImage();
        this.oldman.renderImage();
        this.motorBombSoldier.renderImage();
        //motorSoldier.renderImage();

    }

    update(){
        this.scenario1.update(this.speed);
        this.oldman.update();
        this.motorBombSoldier.update();
        //motorSoldier.update();
    }

    keydownLeft() {
        this.oldman.keydownLeft();
    }

    keydownRight() {
        this.oldman.keydownRight();
    }

    keydownUp() {
        this.oldman.keydownUp();
    }

    keydownDown() {
        this.oldman.keydownDown();
    }
    
    keyupLeft() {
        this.oldman.keyupLeft();
    }

    keyupRight() {
        this.oldman.keyupRight();
    }
    
    keyupUp() {
        this.oldman.keyupUp();
    }

    keyupDown() {
        this.oldman.keyupDown();
    }
}

class GameOver {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        //scenario1.renderImage();

    }

    update(){
        //scenario1.update(this.speed)
    }
}

export class Screen {
    constructor(debug=true){  
        this.debug = debug;   
        this.gameStart = new GameStart();
        this.gamePlay = new GamePlay(this.debug);
        this.gameOver = new GameOver();
    }    
}