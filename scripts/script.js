// JavaScript Document

//Hamburgermenu
var hamburger = document.querySelector('header nav ul:first-of-type li:first-of-type');
var uitklapMenu = document.querySelector('header nav ul:first-of-type li:first-of-type');

hamburger.addEventListener('click', openHamburger);

function openHamburger() {
    uitklapMenu.classList.toggle('open');
}

//Chat met ons
var chatBtn = document.querySelector('section:nth-of-type(6) button, section:nth-of-type(5) button');
var form = document.querySelector('section:nth-of-type(6) form, section:nth-of-type(5) form');
var close = document.querySelector('section:nth-of-type(6) fieldset button, section:nth-of-type(5) fieldset button');

chatBtn.addEventListener('click', openChat);
close.addEventListener('click', closeChat);

function openChat() {
    form.classList.toggle('open');
}

function closeChat() {
    form.classList.remove('open');
}