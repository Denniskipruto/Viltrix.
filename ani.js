// ...removed logo click-to-intro feature...
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

// Intro animation sequence
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introBg = document.querySelector(".intro-bg");

  // After all letters have shown, start zoom
  setTimeout(() => {
    introBg.style.transform = "scale(2)";
  }, 2800); // after last letter appears

  // Fade out intro overlay to reveal site
  setTimeout(() => {
    intro.style.transition = "opacity 1.5s ease";
    intro.style.opacity = "0";
    setTimeout(() => { intro.style.display = "none"; }, 1500);
  }, 5000); // zoom finishes before fade out
});
// ...removed duplicate tagline typing effect...
// Rotating typing effect for tagline
window.addEventListener("load", () => {
  const tagline = document.querySelector(".video-caption h2");
  
  const phrases = [
    "WE ARE VILTRIX.",
    "Turning ideas into reality.",
    "Building tools for our future robot overlords.",
    "Where ambition meets innovation.",
    "Two founders.One vision. Infinite possibilities."
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!deleting) {
      tagline.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(type, 2000); // pause before deleting
        return;
      }
    } else {
      tagline.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    
    setTimeout(type, deleting ? 50 : 80); // speed
  }
  
  setTimeout(type, 5200); // delay so it starts after intro finishes
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    // Only close mobile nav if open
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    }
    // Let anchor default behavior work (jump to section)
  });
});
