import { Screen } from "./objects/screens/screen1.js";

const screen = new Screen();


window.addEventListener('keydown', function (e) {
  var key = e.keyCode;

    if (key == 37) {
        screen.gamePlay.keydownLeft();
     }

    if (key == 38) {
        screen.gamePlay.keydownUp();
    }

    if (key == 39) {
        screen.gamePlay.keydownRight();
    }

    if (key == 40) {
        screen.gamePlay.keydownDown();
    }
})    

window.addEventListener('keyup', function (e) {
    var key = e.keyCode;
  
      if (key == 37) {
          screen.gamePlay.keyupLeft();
       }
  
      if (key == 38) {
          screen.gamePlay.keyupUp();
      }
  
      if (key == 39) {
          screen.gamePlay.keyupRight();
      }
  
      if (key == 40) {
          screen.gamePlay.keyupDown();
      }
  })    
  

function loop() {
    screen.gamePlay.update();
    screen.gamePlay.renderImage();

    requestAnimationFrame(loop)
};

loop();