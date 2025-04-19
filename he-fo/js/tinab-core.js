const navOpener = document.querySelector(".open-menu"),
  navCloser = document.querySelector(".nav-closer"),
  mobileMenu = document.querySelector(".menu-mob");
navOpener.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-[7000px]");
});

navCloser.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-[7000px]");
});
