// Smooth scroll navigation highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Toggle menu items visibility
const toggleBtn = document.getElementById("toggleMenu");
const menuSection = document.querySelector(".menu-items");

toggleBtn.addEventListener("click", () => {
  menuSection.classList.toggle("hidden");
});

// Contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We’ll get back to you soon.");
  form.reset();
});
