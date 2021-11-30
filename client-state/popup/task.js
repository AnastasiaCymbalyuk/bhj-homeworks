'use strict'

const modalMain = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalClose.onclick = function () {
    this.parentElement.parentElement.classList.remove('modal_active');
    document.cookie = 'modalMain=close';
};

if (document.cookie.length === 0) {
    modalMain.classList.add('modal_active');
};