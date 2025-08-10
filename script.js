// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Typewriter
  const typeEl = document.querySelector('.typewriter');
  if (typeEl) {
    const roles = ['Web Developer', 'UI Designer', 'Brand Stylist'];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    const type = () => {
      const current = roles[roleIndex];
      typeEl.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);

      let speed = isDeleting ? 80 : 150;
      if (!isDeleting && charIndex === current.length) {
        speed = 1500; isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    type();
  }

  // Mobile Nav
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }



function filterSelection(category, event) {
  const items = document.querySelectorAll('.filter-item');
  const buttons = document.querySelectorAll('.filter-buttons button');

  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) 
      ? 'block' 
      : 'none';
  });

  if (event) {
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }
}
  // ---- CAROUSEL FUNCTIONALITY ----
  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');
    const firstImg = carousel.querySelector('img');

    if (!carousel || !firstImg) return; // skip if missing

    function getScrollAmount() {
      // Grab computed gap value directly
      const style = window.getComputedStyle(carousel);
      const gap = parseInt(style.gap) || 16;
      return firstImg.offsetWidth + gap;
    }

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });
    });
  });
});
