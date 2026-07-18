export function initNavigation() {
  /* ── NAV SCROLL STATE ── */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  /* ── MOBILE NAV ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');

  function closeNav() {
    if (hamburger) hamburger.classList.remove('open');
    if (navLinks) navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (hamburger && navLinks && overlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', closeNav);
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  }

  /* ── BACK TO TOP ── */
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}
