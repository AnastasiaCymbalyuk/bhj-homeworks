const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('inputValue', editor.value);
});

editor.value = localStorage.getItem('inputValue');