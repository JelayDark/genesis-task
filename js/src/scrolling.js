"use strict"

ready(() => {

    const totooButton = document.getElementById('scroll-top');  

    let timer;
    const scrollTop = () => {
        const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            // window.scrollBy(0,-100);
            // timer = setTimeout(scrollTop, 20);
        } else clearTimeout(timer);
        // return false;
    }

    totooButton.onclick = () => scrollTop();
});
