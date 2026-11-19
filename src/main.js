import './styles/main.css';
import { initTheme } from './js/theme.js';
import { initNavigation } from './js/navigation.js';
import { initAnimations } from './js/animations.js';
import { initPortfolioFilter } from './js/portfolio.js';
import { initContactForm } from './js/contact.js';
import { initLightbox } from './js/lightbox.js';

// Initialize all modules when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initAnimations();
  initPortfolioFilter();
  initContactForm();
  initLightbox();
});

// Hide page loader on window load event
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 700);
  }
});
