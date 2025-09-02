// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Theme Toggle Functionality
  function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeIcon.textContent = '🌙';
    } else {
      body.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
    }
  }

  // Mobile Navigation Toggle
  function toggleMobileNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
  }

  // Add event listeners
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', toggleMobileNav);
  }

  // Close mobile nav when clicking outside
  document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (mobileToggle && !mobileToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
});