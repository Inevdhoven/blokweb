// JavaScript Document
var hamburger = document.querySelector('header nav ul:first-of-type li:first-of-type');
var uitklapMenu = document.querySelector('header nav ul:first-of-type li:first-of-type');

hamburger.addEventListener('click', openHamburger);

function openHamburger() {
    uitklapMenu.classList.toggle('open');
}