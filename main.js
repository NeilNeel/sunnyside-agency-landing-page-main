"use strict";

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav--links-container");
hamburger.addEventListener("click", function (e) {
  navBar.classList.toggle("active");
});
