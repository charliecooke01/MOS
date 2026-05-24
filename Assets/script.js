// Import GSAP
gsap.registerPlugin(ScrollTrigger);

// On refresh remove anchor tag from url
(function resetOnRefresh() {
  const nav = performance.getEntriesByType("navigation")[0];
  if (!nav || nav.type !== "reload") return;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }

  window.scrollTo(0, 0);
})();

// Navbar mobile menu toggle
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

if (navbarToggle && navbar && navbarMenu) {
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

// Scroll animations with GSAP

//banner items
document.querySelectorAll(".banner-content-text").forEach((group) => {
  const bannerItems = group.querySelectorAll(".banner-item-animate");
  if (!bannerItems.length) return;

  gsap.from(bannerItems, {
    autoAlpha: 0,
    x: 24,
    duration: 1,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: group,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

gsap.utils.toArray(".banner-item-animate").forEach((element) => {
  if (element.closest(".banner-content-text")) return;

  gsap.from(element, {
    autoAlpha: 0,
    y: 24,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//text animations
gsap.utils.toArray(".text-animate-up").forEach((element) => {
  gsap.from(element, {
    autoAlpha: 0,
    y: 24,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//image animations
gsap.utils.toArray(".image-animate-left").forEach((element) => {
  gsap.from(element, {
    autoAlpha: 0,
    x: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//icons animations
document.querySelectorAll(".section-with-icons-list").forEach((group) => {
  const icons = group.querySelectorAll(".icon-animate");
  if (!icons.length) return;

  gsap.from(icons, {
    autoAlpha: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: group,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

gsap.utils.toArray(".icon-animate").forEach((element) => {
  if (element.closest(".section-with-icons-list")) return;

  gsap.from(element, {
    autoAlpha: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//button animations
gsap.utils.toArray(".button-animate").forEach((element) => {
  gsap.from(element, {
    autoAlpha: 0,
    x: -24,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//faq animations
gsap.utils.toArray(".faq-animate").forEach((element) => {
  gsap.from(element, {
    autoAlpha: 0,
    x: 24,
    duration: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

window.addEventListener("load", () => ScrollTrigger.refresh());
