import { BasicObject } from "./basicObject.js"


function getKey () {
    key = 0
    window.addEventListener('keydown', function (e) {
        key = e.keyCode;
    })    
    return key
}




export class BasicChar extends BasicObject{
    constructor(){
        super(sprites, sourceX, sourceY, width, height, posX, posY, canvas, context)

    }
    moveUp() {

    }

    moveDown() {

    }

    moveLeft() {
        
    }
    moveRight() {

    }
}