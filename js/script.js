'use strict';

function rang() {
    const line = document.querySelectorAll('.cv__rang-line span'),
        counter = document.querySelectorAll('.cv__rang-counter');
    console.log(line);
    console.log(counter);
    counter.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });
}


rang();