// Navbar toggle
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

if (navbarToggle) {
  navbarToggle.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("open");
    navbarToggle.setAttribute("aria-expanded", isOpen);
  });

  navbarMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("open");
      navbarToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Accordion
const accordion = document.getElementsByClassName("container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const content = this.querySelector(".content");
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0px";
    }
  });
}
