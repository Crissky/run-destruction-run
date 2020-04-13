import { Background } from "./background.js";

const background = new Background();

class GameStart {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        background.renderImage();

    }

    update(){
        background.update(this.speed)
    }
}

class GamePlay {
    constructor(){
        this.speed = 2;
    }

    renderImage(){
        background.renderImage();

    }

    update(){
        background.update(this.speed)
    }
}

class GameOver {
    constructor(){
        this.speed = 0;
    }

    renderImage(){
        background.renderImage();

    }

    update(){
        background.update(this.speed)
    }
}


export class Screen {
    constructor(){     
        this.gameStart = new GameStart();
        this.gamePlay = new GamePlay();
        this.gameOver = new GameOver();
    }
}