const widget = document.querySelector('.chat-widget');
const widgetInput = document.querySelector('.chat-widget__input');
const message = document.querySelector('.chat-widget__messages');

let timer = 0;

widget.addEventListener('click', (event) => {
    if (!event.currentTarget.classList.contains('chat-widget_active')) {
        widget.classList.add('chat-widget_active');
        timer = setInterval(timerFn, 30000);
    };
});

function timerFn(){
    const time = new Date().getHours() + ':' + new Date().getMinutes();
    message.innerHTML += `
        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
            Вы еще тут?
        </div>
    </div>
    `;
    scrollAuto();
};

function scrollAuto () {
    const messageScroll = document.querySelector('.chat-widget__messages-container');
    messageScroll.scrollTop = messageScroll.scrollHeight;
};

widgetInput.addEventListener('keyup', (event) => {
    clearInterval(timer);  
    const messageText = [
        'Чем могу помочь?',
        'Добрый день!',
        'Хорошего дня',
        'Спасибо',
        'До досвидания',
        'Отлично!',
        'К сожалению все операторы заняты',
        'Обратитесь в службу поддержки'
    ];
    const messageRandom = messageText[Math.floor(Math.random() * messageText.length)];

    if ((event.code === 'Enter') && (widgetInput.value.length)) {
        const time = new Date().getHours() + ':' + new Date().getMinutes();
        message.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${event.target.value}
            </div>
        </div>
        `;
        scrollAuto();
        message.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${messageRandom}
            </div>
        </div>
        `;
        scrollAuto();
        event.target.value = ''; 
    };
    timer = setInterval(timerFn, 30000);
});