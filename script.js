document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      // Toggle Classes
      hamburger.classList.toggle("is-active");
      navMenu.classList.toggle("active");

      // Lock/Unlock Body Scroll
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });

    // Auto-close when a link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }
});
