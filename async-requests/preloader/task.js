const loaderActive = document.querySelector('.loader_active');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', false);
xhr.send();

if (xhr.readyState === xhr.DONE) {
    loaderActive.classList.toggle('loader_active');
    const data = JSON.parse(xhr.responseText).response.Valute;

    for (let key in data) {
        items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${data[key].CharCode}
                </div>
                <div class="item__value">
                    ${data[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>  
        `;
    };   
};