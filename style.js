const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile_links");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.style.display = "flex";
    hamburger.setAttribute("src", "./images/icon-close.svg");
  } else {
    menu.style.display = "none";
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
