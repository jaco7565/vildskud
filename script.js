const burger = document.querySelector(".hamburger");
const burgerContent = document.querySelector(".burger-content");
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookies = document.querySelector(".cookie-card");

burger.addEventListener("click", showBurger);
acceptCookie.addEventListener("click", fjernCookie);
denyCookie.addEventListener("click", fjernCookie);

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

function fjernCookie() {
  console.log("hej");
  cookies.classList.add("hidden");
}
