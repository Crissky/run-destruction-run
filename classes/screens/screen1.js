import { Scenario1 } from "../scenarios/scenario1.js";
import { OldMan } from "../chars/oldMan.js";
import { MotorSoldier } from "../chars/motorSoldier.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const scenario1 = new Scenario1(canvas, context);
const oldman = new OldMan(canvas, 45, 0, 45, 41, 30, 361);
const motorSoldier = new MotorSoldier(canvas, 57, 0, 57, 42, 100, 361)

class GameStart {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        scenario1.renderImage();

    }

    update(){
        scenario1.update(this.speed)
    }
}

class GamePlay {
    constructor(){
        this.speed = 2;
    }

    renderImage() {
        context.clearRect(0,0,canvas.width, canvas.height); // Clean Screen
        scenario1.renderImage();
        oldman.renderImage();
        motorSoldier.renderImage();

    }

    update(){
        scenario1.update(this.speed);
        oldman.update();
        motorSoldier.update();
    }

    keydownLeft() {
        oldman.keydownLeft();
    }

    keydownRight() {
        oldman.keydownRight();
    }

    keydownUp() {
        oldman.keydownUp();
    }

    keydownDown() {
        oldman.keydownDown();
    }
    
    keyupLeft() {
        oldman.keyupLeft();
    }

    keyupRight() {
        oldman.keyupRight();
    }
    
    keyupUp() {
        oldman.keyupUp();
    }

    keyupDown() {
        oldman.keyupDown();
    }
}

class GameOver {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        scenario1.renderImage();

    }

    update(){
        scenario1.update(this.speed)
    }
}

export class Screen {
    constructor(){     
        this.gameStart = new GameStart();
        this.gamePlay = new GamePlay();
        this.gameOver = new GameOver();
    }    
}