'use strict'

const lost = document.getElementById('lost');
const dead = document.getElementById('dead');
const holeGame = document.getElementsByClassName('hole');

let counter = 0;

for(let i = 1; i <= holeGame.length; i++) {
    const getHole = document.getElementById(`hole${i}`);
    const result = () => {
        lost.textContent = 0;
        dead.textContent = 0;
        counter = 0;
    };
    
    getHole.onclick = function () {
        counter++;
        if (getHole.classList.contains('hole_has-mole')) {
            dead.textContent++;   
        } else {          
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('вы проиграли');
                result();
            };
        };
        if (counter === 10) {
                alert('вы победили');
                result();
        };
    };
};


