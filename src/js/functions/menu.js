let menuMobile = document.querySelector(".nav");
let closeButton = document.querySelector(".close");
let menuButton = document.querySelector(".menu");

export const getMenu = () => {
  menuButton.addEventListener("click", () => {
    menuMobile.classList.add("nav--active");
  });
};
export const closeMenu = () => {
  closeButton.addEventListener("click", () => {
    menuMobile.classList.remove("nav--active");
  });
};
