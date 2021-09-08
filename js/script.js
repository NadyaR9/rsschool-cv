'use strict';

function rang() {
    const line = document.querySelectorAll('.rang-line span'),
        counter = document.querySelectorAll('.rang-counter');
    counter.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });
}


rang();

let showMenu = function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu-list');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-list_active');
        hamburger.classList.toggle('hamburger_active');
    });
};

showMenu();