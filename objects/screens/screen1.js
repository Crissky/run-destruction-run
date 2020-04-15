import { Scenario1 } from "../scenarios/scenario1.js";
import { Char } from "../chars/oldMan.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const scenario1 = new Scenario1(canvas, context);
const char = new Char(45, 0, 45, 41, 30, 361, canvas, context);

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

    renderImage(){
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

    keydownUp() {
        char.keydownUp();
    }

    keydownRight() {
        char.keydownRight();
    }

    keydownDown() {
        char.keydownDown();
    }
    
    keyupLeft() {
        char.keyupLeft();
    }

    keyupUp() {
        char.keyupUp();
    }

    keyupRight() {
        char.keyupRight();
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