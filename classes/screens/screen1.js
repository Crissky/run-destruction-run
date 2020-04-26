import { Scenario1 } from "../scenarios/scenario1.js";
import { Char } from "../chars/oldMan.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const scenario1 = new Scenario1(canvas, context);
const char = new Char(canvas, 45, 0, 45, 41, 30, 361);

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
        char.renderImage();

    }

    update(){
        scenario1.update(this.speed)
        char.update()
    }

    keydownLeft() {
        char.keydownLeft();
    }

    keydownRight() {
        char.keydownRight();
    }

    keydownUp() {
        char.keydownUp();
    }

    keydownDown() {
        char.keydownDown();
    }
    
    keyupLeft() {
        char.keyupLeft();
    }

    keyupRight() {
        char.keyupRight();
    }
    
    keyupUp() {
        char.keyupUp();
    }

    keyupDown() {
        char.keyupDown();
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