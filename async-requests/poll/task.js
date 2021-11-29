const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText).data;
        pollTitle.innerHTML = data.title;
        for (let i in data.answers) {
            pollAnswers.innerHTML += `
                <button class="poll__answer">
                    ${data.answers[i]}
                </button>
            `;
        }; 
    };
});

pollAnswers.addEventListener('click', (event) => {
    const button = event.target.classList.contains('poll__answer');
    if (button) {
        alert(`Спасибо, ваш голос засчитан!`);
    };
    event.preventDefault();
});