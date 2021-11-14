const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for(let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', () => {
        const activeTab = document.querySelector('.tab_active');
        const activeTabContent = document.querySelector('.tab__content_active');
        if (activeTab) {
            activeTab.classList.toggle('tab_active');
            activeTabContent.classList.toggle('tab__content_active');
        };
        tab[i].classList.toggle('tab_active');
        tabContent[i].classList.toggle('tab__content_active');
    });
};
