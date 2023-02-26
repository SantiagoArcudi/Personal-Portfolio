const navbarMenuButton = document.querySelector(".navbar-menu-button");
const navbarLinks = document.querySelector(".navbar-links");

navbarMenuButton.addEventListener("click", () => {
  navbarMenuButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
