'use strict'

// const timerFn = function () {

//     const timer = document.getElementById("timer");
//     timer.textContent -= 1;

//     if(timer.textContent == 0){
//         clearInterval(intervalTender);
//         alert('Вы победитель в конкурсе!');
//     };

// };

// const intervalTender = setInterval(timerFn, 1000);

let dateToday = new Date();
dateToday = dateToday.setSeconds(dateToday.getSeconds() + 10);

const time = function (){

    const timer = document.getElementById("timer");
    const diffDate =  dateToday - new Date();

    let hours = Math.floor(diffDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diffDate / 1000 / 60) % 60;
    let seconds = Math.floor(diffDate / 1000) % 60;

    hours = (hours < 10) ? '0' + hours : hours;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    if(diffDate < 0){
        window.location.assign('https://github.com');
        clearInterval(intervalTime); 
    }else{
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    };
    
};

const intervalTime = setInterval(time, 100);