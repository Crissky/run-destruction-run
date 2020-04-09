import { BasicObject } from "./objects/basicObject.js";


const sprites = new Image();
//sprites.src = './sprites/char.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//const basicObject = new BasicObject(sprites,0,0,33,24,10,50,canvas,context);

function loop() {
    basicObject.renderImage();
    
    requestAnimationFrame(loop)
};

loop();