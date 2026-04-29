const glow = document.querySelector(".cursor-glow");

// follow mouse
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// interactive effect on hover
const interactiveElements = document.querySelectorAll("a, button, .project-card");

interactiveElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    glow.style.transform = "translate(-50%, -50%) scale(1.4)";
    glow.style.opacity = "0.35";
  });

  el.addEventListener("mouseleave", () => {
    glow.style.transform = "translate(-50%, -50%) scale(1)";
    glow.style.opacity = "0.2";
  });
});
