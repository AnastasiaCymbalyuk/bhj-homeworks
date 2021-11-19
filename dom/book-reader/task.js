const book = document.querySelectorAll('.book__control');
const bookClass = document.querySelector('.book');

function checkClick (event) {
    const fontActive = event.currentTarget.querySelector('.font-size_active');
    const colorActive = event.currentTarget.querySelector('.color_active');

    if (fontActive) {
        fontActive.classList.remove('font-size_active');
        bookClass.classList.remove(`book_fs-${fontActive.dataset.size}`);
        event.target.classList.toggle('font-size_active');
        const fontSize = event.target.dataset.size;
        if (fontSize) {
            bookClass.classList.add(`book_fs-${fontSize}`);
        };
    } else {
        colorActive.classList.remove('color_active');
        event.target.classList.toggle('color_active');

        if (bookClass.querySelector('.book__control_color')) {
            bookClass.classList.remove(`book_color-${colorActive.dataset.textColor}`);
            const color = event.target.dataset.textColor;
            if (color) {
                bookClass.classList.add(`book_color-${color}`);
            };  
        };
        if (bookClass.querySelector('.book__control_background')) {
            bookClass.classList.remove(`book_bg-${colorActive.dataset.bgColor}`);
            const background = event.target.dataset.bgColor;
            if (background) {
                bookClass.classList.add(`book_bg-${background}`);
            };
        };
    };
    event.preventDefault();
};

for (let item of book) {
    item.addEventListener('click', checkClick);
};

