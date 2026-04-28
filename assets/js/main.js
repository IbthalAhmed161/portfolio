
const menuBtn = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
if (menuBtn) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 110) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const counters = document.querySelectorAll("[data-count]");
let counted = false;
function countUp(){
  if(counted) return;
  const trigger = document.querySelector(".kpi-grid, .mini-grid");
  if(!trigger) return;
  if(trigger.getBoundingClientRect().top < window.innerHeight){
    counted = true;
    counters.forEach(counter=>{
      const target = parseFloat(counter.dataset.count);
      const suffix = counter.dataset.suffix || "";
      let current = 0;
      const steps = 55;
      const increment = target / steps;
      const timer = setInterval(()=>{
        current += increment;
        if(current >= target){
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
        }
      }, 22);
    });
  }
}
window.addEventListener("scroll", countUp);
countUp();
