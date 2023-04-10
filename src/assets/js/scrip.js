const menu = document.querySelector("#nav");
const navList = document.querySelector("#nav-list");
const logoDiv = document.querySelector("#logo-div");
const preLoader = document.querySelector("#pre-loader");

var loaderTime;
var sliderTime;
clearTimeout(loaderTime);
loaderTime = setTimeout(() => {
  preLoader.classList.add("fade-out");
  startTransition();
}, 2000);

function removePreloader() {
  clearTimeout(sliderTime);
  sliderTime = setTimeout(() => {
    preLoader.style.display = "none";
  }, 2000);
}

function openNav() {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.style.width = "270px";
    document.querySelector("#menu").style.left = "280px";
    navList.style.marginLeft = "0px";
    logoDiv.style.marginLeft = "0px";
  } else {
    menu.style.width = "0px";
    document.querySelector("#menu").style.left = "1.5rem";
    navList.style.marginLeft = "-400px";
    logoDiv.style.marginLeft = "-800px";
  }
}

function resizeWindow() {
  if (window.innerWidth > 1023) menu.style.width = "22%";
  else {
    if (menu.classList.contains("active")) menu.style.width = "270px";
    else menu.style.width = "0px";
    navList.style.marginLeft = "0px";
    logoDiv.style.marginLeft = "0px";
  }
}

const appRoot = document.getElementById("page");
const root = document.documentElement;
const endTransition = () => {
  const loader = document.querySelector(".loader");
  loader.addEventListener("transitionend", () => {
    loader.style.transform = "translateX(100%)";
    root.classList.remove("disable-hover");
  });
  loader.style.transform = "";
};

const startTransition = () => {
  const loader = document.querySelector(".loader");
  loader.style.transform = "translateX(100%)";
  removePreloader();
};

// window.addEventListener("load", () => {
//   startTransition();
// });

// set active nav

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".to-active");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

// end
