'use strict'
const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    };
});

button.addEventListener('click', (event) => {
    if (input.value.length) {
        addList(input);
    }; 
    event.preventDefault();
});

input.addEventListener('keyup', (event) => {
    if ((event.code === 'Enter') && (input.value.length)) {
        addList(event);
    };
});

function addList (event) {
    tasksList.insertAdjacentHTML('afterBegin', `
        <div class="task">
            <div class="task__title">
                ${event.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    input.value = '';
};