"use strict"

ready(() => {
    const menuButton = document.getElementsByClassName('min-menu')[0];
    const menu = document.getElementsByClassName('min-menu-wrapper')[0];
    const closeButton = document.getElementsByClassName('close-menu')[0];
    menuButton.onclick = () => {
        menu.classList.toggle('menu-collapsed');
    }
    closeButton.onclick = () => {
        menu.classList.toggle('menu-collapsed');
    }
});