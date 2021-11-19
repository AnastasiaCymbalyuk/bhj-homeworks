const reveal = document.querySelectorAll('.reveal');
const height = window.innerHeight;

window.onscroll = function () {
    for (let rev of reveal) {
        const objectVisible = rev.getBoundingClientRect();
        const objectTop = height > objectVisible.top && objectVisible.top > 0;
        const objectBottom = height > objectVisible.bottom && objectVisible.bottom > 0;
        
        if (objectTop && objectBottom) {
            rev.classList.add('reveal_active');
        }; 
    }; 
};