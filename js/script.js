const hamburger = document.querySelector("#hamburger");
const menu__itens = document.querySelector(".menu__itens");
const close__mark = document.querySelector("#close__mark");

hamburger.addEventListener("click", () => menu__itens.classList.toggle("active"));

close__mark.addEventListener("click", () => menu__itens.classList.remove("active"));