'use strict'

const lengthSlider = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');

const allDot = document.querySelectorAll('.slider__dot');

let index = 0; 

const activeSlide = function(index){
    const active = document.querySelector('.slider').querySelector('.slider__item_active');
    if(active){
        active.classList.remove('slider__item_active');    
    };
    lengthSlider[index].classList.add('slider__item_active');
};

const activeDot = function(index){
    for(const dot of allDot){
        dot.classList.remove('slider__dot_active');
    };
    allDot[index].classList.add('slider__dot_active');
};

const activeClass = (index) => {
    activeSlide(index);
    activeDot(index);
};

next.onclick = function (){
    if(index == lengthSlider.length - 1){
        index = 0;
        activeClass(index);
    }else{
        index++;
        activeClass(index);
    };
};

prev.onclick = function (){
    if(index == 0){
        index = lengthSlider.length - 1;
        activeClass(index);
    }else{
        index--;
        activeClass(index);
    }; 
};

allDot.forEach((item, indexDot) => {
    item.onclick = function(){
        index = indexDot;
        activeClass(index);
    };
});
