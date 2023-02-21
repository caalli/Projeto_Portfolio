/* Abre e Fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") 
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nave-active");

});


/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {

  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nave-active")) {
      body.classList.remove("menu-nave-active")
      menuMobile.classList.replace("bi-x", "bi-list");
      
    }
})
})
