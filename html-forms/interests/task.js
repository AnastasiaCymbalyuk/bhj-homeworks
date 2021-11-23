const interests = document.querySelectorAll('.interests');

for (let item of interests) {
   const itemInterest = item.closest('.interest');
    if (itemInterest) {
        const checkInterest = itemInterest.querySelector('.interest__check');
        checkInterest.addEventListener('change', () => {
            if(checkInterest.checked){
                saveChecked(itemInterest, true);
            } else {
                saveChecked(itemInterest, false);
            };
        });
    };
};

function saveChecked (el, checked) {
    const element = el.querySelectorAll('.interest__check');
    for (let item of element) {
        item.checked = checked;
    };
};