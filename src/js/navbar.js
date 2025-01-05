// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    const toggleIcon = document.querySelector('.navbar__toggle-icon');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      
      // Animate hamburger to X
      if (toggle.classList.contains('active')) {
        toggleIcon.style.background = 'transparent';
        toggleIcon.style.transform = 'rotate(180deg)';
      } else {
        toggleIcon.style.background = '#333';
        toggleIcon.style.transform = 'rotate(0)';
      }
    });
  });