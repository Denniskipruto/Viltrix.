
window.addEventListener("load", () => {
  
  const intro = document.getElementById("intro");
  const introBg = document.querySelector(".intro-bg");
  const letters = document.querySelectorAll(".letter");
  if (intro && introBg && letters.length) {
    letters.forEach((letter, i) => {
      setTimeout(() => { letter.style.opacity = "1"; }, i * 300);
    });
    setTimeout(() => {
      const title = document.querySelector(".intro-title");
      if (title) {
        title.style.transition = "opacity 1s ease";
        title.style.opacity = "0";
      }
    }, 3500);
    setTimeout(() => { introBg.style.transform = "scale(2)"; }, 4200);
    setTimeout(() => {
      intro.style.transition = "opacity 1.5s ease";
      intro.style.opacity = "0";
      setTimeout(() => { intro.style.display = "none"; }, 1500);
    }, 5200);
  }

  
  const tagline = document.querySelector(".video-caption h2");
  const phrases = [
    "WE ARE VILTRIX.",
    "Powering innovation with precision.",
    "Where ambition meets innovation.",
    "Two founders. One vision. Infinite possibilities."
  ];
  if (tagline) {
    let phraseIndex = 0, charIndex = 0, deleting = false;
    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (!deleting) {
        tagline.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
          deleting = true;
          setTimeout(type, 2000);
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
      setTimeout(type, deleting ? 50 : 80);
    }
    setTimeout(type, 6000);
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      const navMenu = document.getElementById("navMenu");
      if (navMenu && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
    });
  });

  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;
  const displayTime = 5000;
  let isTransitioning = false;
  if (testimonials.length) {
    testimonials[0].classList.add('active');
    setInterval(() => {
      if (isTransitioning) return;
      isTransitioning = true;
      const prev = testimonials[currentIndex];
      prev.classList.remove('active');
      prev.classList.add('leaving');
      prev.addEventListener('transitionend', function handler(e) {
        prev.classList.remove('leaving');
        prev.removeEventListener('transitionend', handler);
        isTransitioning = false;
      });
      currentIndex = (currentIndex + 1) % testimonials.length;
      const next = testimonials[currentIndex];
      next.classList.add('active');
    }, displayTime);
  }

  const themeToggle = document.getElementById('themeToggle');
  const moonCloud = document.getElementById('moonCloud');
  const sunCloud = document.getElementById('sunCloud');
  if (themeToggle && moonCloud && sunCloud) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    function setTheme(dark) {
      document.body.classList.toggle('dark-theme', dark);
      moonCloud.style.display = dark ? 'none' : 'block';
      sunCloud.style.display = dark ? 'block' : 'none';
      localStorage.setItem('viltrix-theme', dark ? 'dark' : 'light');
    }
    const savedTheme = localStorage.getItem('viltrix-theme');
    setTheme(savedTheme === 'dark' || (savedTheme === null && prefersDark));
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      setTheme(!document.body.classList.contains('dark-theme'));
    });
      
  }
});
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) navMenu.classList.toggle("open");
}
 
