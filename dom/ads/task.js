const rotatorAll = document.querySelectorAll('.rotator');

function rotatorInterval (rotatorAll) {
  for (let item of rotatorAll) {
    const rotatorActive = item.querySelector('.rotator__case_active');
    rotatorActive.style.color = rotatorActive.dataset.color;

    if (rotatorActive === item.lastElementChild) {
      item.firstElementChild.classList.add('rotator__case_active');
    } else {
      rotatorActive.nextElementSibling.classList.add('rotator__case_active');
    };
    rotatorActive.classList.remove('rotator__case_active');

    clearInterval(timer);
    timer = setInterval(rotatorInterval, rotatorActive.dataset.speed, rotatorAll);
  };
};

let timer = setInterval(rotatorInterval, 1000, rotatorAll);