'use strict'

const menuLink = document.querySelectorAll('.menu__link');

for(let i = 0; i < menuLink.length; i++){
    const elementNextLink = menuLink[i].closest('.menu__item').querySelector('.menu_sub');

    menuLink[i].onclick = function(){
        const active = this.closest('ul').querySelector('.menu_active');
        
        if (this.nextElementSibling.classList.contains('menu_active')) {
            this.nextElementSibling.className = 'menu menu_sub';
            return false; 
        };
        if(active){
            active.classList.toggle('menu_active');
        };
        if(elementNextLink){  
            elementNextLink.classList.toggle('menu_active');
            return false;
        };
    };
};