  // Add scroll shadow effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });

   // Toggle mobile menu
   const menuButton = document.getElementById('menu-button');
   const mobileMenu = document.getElementById('mobile-menu');
   menuButton.addEventListener('click', function() {
     mobileMenu.classList.toggle('hidden');
   });