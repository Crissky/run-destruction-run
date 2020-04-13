import { Screen } from "./objects/screen.js";

const screen = new Screen();

function loop() {
    screen.gamePlay.update();
    screen.gamePlay.renderImage();

    requestAnimationFrame(loop)
};

loop();