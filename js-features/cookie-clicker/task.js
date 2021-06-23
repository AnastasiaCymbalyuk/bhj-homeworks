'use strict'

const image = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('cliker__speed');

let clickTime = 0;
image.onclick = function(){
    const dateStart = Date.now();
    clicker.textContent++;
    if(clicker.textContent % 2){
        image.width = 300;
    }else{
        image.width = 200;
    };
    setTimeout (() => {
        clickTime += (Date.now() - dateStart);
        clickerSpeed.textContent = (clicker.textContent / (clickTime / 1000)).toFixed(2);
    }, 1000);
};