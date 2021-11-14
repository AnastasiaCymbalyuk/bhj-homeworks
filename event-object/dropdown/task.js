const dropdown = document.querySelectorAll('.dropdown');
const value = document.querySelectorAll('.dropdown__value');
const list = document.querySelectorAll('.dropdown__list');

for (let i = 0; i < value.length; i++) {
    value[i].addEventListener('click', () => {
        list[i].classList.toggle('dropdown__list_active');
    });
    const item = dropdown[i].querySelectorAll('.dropdown__item');
    for (let el = 0; el < item.length; el++) {
        item[el].addEventListener('click', (event) => {
            list[i].classList.toggle('dropdown__list_active');
            value[i].textContent = event.target.textContent;
            event.preventDefault();
        });
    };
};