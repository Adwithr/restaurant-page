import "./styles.css";
import { homePage } from "./home-page";
import { aboutPage } from "./about-page";
import { menuPage } from "./menu-page";

homePage();

const homeNav = Array.from(document.querySelectorAll(".home-nav"));
const menuNav = document.querySelector(".menu-nav");
const aboutNav = document.querySelector(".about-nav");
const menuNavBtn = document.querySelector(".menu-nav-btn");
const aboutNavBtn = document.querySelector(".about-nav-btn");

homeNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    homePage();
    const menuNavBtn = document.querySelector(".menu-nav-btn");
    const aboutNavBtn = document.querySelector(".about-nav-btn");
    menuNavBtn.addEventListener("click", () => {
      menuPage();
      currentPageMark("menu");
    });
    aboutNavBtn.addEventListener("click", () => {
      aboutPage();
      currentPageMark("about");
    });
    currentPageMark("home");
  });
});

menuNav.addEventListener("click", () => {
  menuPage();
  currentPageMark("menu");
});
menuNavBtn.addEventListener("click", () => {
  menuPage();
  currentPageMark("menu");
});

aboutNav.addEventListener("click", () => {
  aboutPage();
  currentPageMark("about");
});
aboutNavBtn.addEventListener("click", () => {
  aboutPage();
  currentPageMark("about");
});

function currentPageMark(page) {
  homeNav[1].classList.remove("current-page");
  menuNav.classList.remove("current-page");
  aboutNav.classList.remove("current-page");
  switch (page) {
    case "home":
      homeNav[1].classList.add("current-page");
      break;
    case "menu":
      menuNav.classList.add("current-page");
      break;
    case "about":
      aboutNav.classList.add("current-page");
      break;
  }
}

currentPageMark("home");
