document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  window.onresize = closeMenu;
  window.onclick = closeMenu;

  function mobileMenu(e) {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  }
});
