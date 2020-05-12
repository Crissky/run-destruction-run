import { Scenario1 } from "../scenarios/scenario1.js";
import { OldMan } from "../chars/playables/oldMan.js";
import { MotorSoldier } from "../chars/enemies/motorSoldier.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');



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
    constructor(debug=true){
        this.speed = 2;
        this.debug = debug;
    }
    scenario1 = new Scenario1(canvas, context);
    oldman = new OldMan(canvas, 30, 361, this.debug);

    renderImage() {
        context.clearRect(0,0,canvas.width, canvas.height); // Clean Screen
        scenario1.renderImage();
        oldman.renderImage();
        //motorSoldier.renderImage();

    }

    update(){
        scenario1.update(this.speed);
        oldman.update();
        //motorSoldier.update();
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
    constructor(debug=true){  
        this.debug = debug;   
        this.gameStart = new GameStart();
        this.gamePlay = new GamePlay(this.debug);
        this.gameOver = new GameOver();
    }    
}