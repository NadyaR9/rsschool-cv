'use strict';

function rang() {
    const line = document.querySelectorAll('.rang-line span'),
        counter = document.querySelectorAll('.rang-counter');
    counter.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });
}


rang();