'use strict'

const image = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('cliker__speed');

let clickTime = 0;
let dateStart = Date.now();

image.onclick = function () {
    clicker.textContent++;
    if (clicker.textContent % 2) {
        image.width = 300;
    } else {
        image.width = 200;
    };
    const dateFinish = Date.now();
    clickerSpeed.textContent = (1 / ((dateFinish - dateStart) / 1000)).toFixed(2); 
    dateStart = dateFinish;
    clickerSpeed.textContent += ` к/c`;
};