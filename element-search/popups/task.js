'use strict'

const modalMain = document.querySelector('#modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.getElementsByClassName('modal__close');

for(let i = 0; i < modalClose.length; i++){
    modalClose[i].onclick = function(){
        this.parentElement.parentElement.classList.remove('modal_active');
    };
};

const showSuccess = document.getElementsByClassName('show-success');

for(let i = 0; i < showSuccess.length; i++){
    showSuccess[i].addEventListener("click", function () {
        const modalSuccess = document.querySelector('#modal_success');
        modalSuccess.classList.add('modal_active');
    });
};
