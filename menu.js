"use strict";

const primaryNavigation = document.getElementById("primary-navigation");
const btnHamburger = document.getElementById("hamburger-button");
const iconHamburger = btnHamburger.querySelector(".icon-hamburger");

btnHamburger.addEventListener("click", () => {
    primaryNavigation.classList.toggle("open");
    iconHamburger.classList.toggle("morphToClose");
    btnHamburger.setAttribute("aria-expanded", btnHamburger.getAttribute("aria-expanded") === "false" ? "true" : "false");
})