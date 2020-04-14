import { Screen } from "./objects/screen.js";

const screen = new Screen();


window.addEventListener('keydown', function (e) {
  var key = e.keyCode;

    if (key == 37) {
        screen.gamePlay.moveLeft();
     }

    if (key == 38) {
        screen.gamePlay.moveUp();
    }

    if (key == 39) {
        screen.gamePlay.moveRight();
    }

    if (key == 40) {
        screen.gamePlay.moveDown();
    }
})    


function loop() {
    screen.gamePlay.update();
    screen.gamePlay.renderImage();

    requestAnimationFrame(loop)
};

loop();