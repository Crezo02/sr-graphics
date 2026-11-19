export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const image = document.getElementById('lightboxImage');
  const title = document.getElementById('lightboxTitle');
  const sub = document.getElementById('lightboxSub');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const items = Array.from(document.querySelectorAll('.portfolio-item[data-src]'));

  if (!lightbox || !image || items.length === 0) return;

  let current = 0;
  let lastFocused = null;

  const visibleItems = () => items.filter(item => item.style.display !== 'none');

  const show = (index) => {
    const list = visibleItems();
    if (!list.length) return;
    current = (index + list.length) % list.length;
    const item = list[current];
    image.src = item.dataset.src;
    image.alt = item.dataset.title || '';
    title.textContent = item.dataset.title || '';
    sub.textContent = item.dataset.caption || '';
  };

  const open = (index) => {
    lastFocused = document.activeElement;
    show(index);
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  };

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastFocused) lastFocused.focus();
  };

  items.forEach(item => {
    const openItem = () => open(visibleItems().indexOf(item));
    item.addEventListener('click', openItem);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openItem();
      }
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}
