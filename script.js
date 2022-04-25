const burger = document.querySelector(".hamburger");
const burgerContent = document.querySelector(".burger-content");

burger.addEventListener("click", showBurger);

function showBurger() {
  console.log("Hej burger");
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}

function showHeader() {
  const header = document.querySelector(".navbar-top");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log("hej");
}
