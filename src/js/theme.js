export function initTheme() {
  const getThemePreference = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleUI(theme);
  };

  const updateToggleUI = (theme) => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.classList.toggle('dark-mode-active', theme === 'dark');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  };

  // Set initial theme
  const currentTheme = getThemePreference();
  applyTheme(currentTheme);

  // Set up click listeners for all toggles
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    // Clone node to clear duplicate event listeners if initialized multiple times
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  // Watch for system color scheme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}
