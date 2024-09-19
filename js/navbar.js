// Add scroll shadow effect
navbar.classList.add("navbar_border_bg");

// window.addEventListener("scroll", function () {
//   const navbar = document.getElementById("navbar");
//   navbar.classList.add("navbar_border_bg");
//   if (window.scrollY > 50) {
//     navbar.classList.add("navbar_border_bg");
//   } else {
//     navbar.classList.remove("navbar_border_bg");
//   }
// });

// Toggle mobile menu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
