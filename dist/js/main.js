"strict";
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".menu-nav_item");

let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItem.forEach((nav) => nav.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    showMenu = false;
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItem.forEach((nav) => nav.classList.remove("open"));
  }
}

menuBtn.addEventListener("click", toggleMenu);
