// mobile nav
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// cursor glow
const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  const interactiveElements = document.querySelectorAll("a, button, .project-card, .contact-card");

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      glow.style.transform = "translate(-50%, -50%) scale(1.4)";
      glow.style.opacity = "0.75";
    });

    el.addEventListener("mouseleave", () => {
      glow.style.transform = "translate(-50%, -50%) scale(1)";
      glow.style.opacity = "0.55";
    });
  });
}

// reveal on scroll
const reveals = document.querySelectorAll(".reveal, .page-enter");

function revealOnScroll() {
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
