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

  // Scroll Animation Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-fade-up').forEach((el) => {
    observer.observe(el);
  });
});

// Interactive Timeline Logic
window.toggleTimeline = function(element) {
  const description = element.querySelector('.timeline-description');
  
  if (!description) return;
  
  const isExpanded = description.classList.contains('expanded');
  
  // Close all descriptions first (accordion style)
  document.querySelectorAll('.timeline-description').forEach(desc => {
    desc.classList.remove('expanded');
  });
  
  // Toggle the clicked one
  if (!isExpanded) {
    description.classList.add('expanded');
  }
};

// Scroll to Top Logic
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
