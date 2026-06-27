// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleInput = document.getElementById('darkModeToggle');
  const body = document.documentElement;
  
  // Check local storage for theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (toggleInput) {
      toggleInput.checked = currentTheme === 'dark';
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Check system preference
    body.setAttribute('data-theme', 'dark');
    if (toggleInput) {
      toggleInput.checked = true;
    }
  }

  if (toggleInput) {
    toggleInput.addEventListener('change', (e) => {
      let newTheme = e.target.checked ? 'dark' : 'light';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
});
