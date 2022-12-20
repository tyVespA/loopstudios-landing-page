const openMobileMenu = document.querySelector(".hamburger-icon");
const closeMobileMenu = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-toggle");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x");
  openMobileMenu.classList.add("display-none");
  closeMobileMenu.classList.remove("display-none");
})

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x");
  closeMobileMenu.classList.add("display-none");
  openMobileMenu.classList.remove("display-none");
})

