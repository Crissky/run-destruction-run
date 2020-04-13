import { Scenario1 } from "./scenario1.js";
import { Char } from "./char.js";

const scenario1 = new Scenario1();
const char = new Char(45, 0, 45, 41, 30, 320);

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