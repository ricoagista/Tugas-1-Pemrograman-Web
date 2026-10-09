// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section-content, .project-card, .experience-card, .skill-card, .certification-card, .contact-item, .recommendation-card').forEach(el => {
  observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Self-check: Verify page structure
document.addEventListener('DOMContentLoaded', () => {
  // Check if main sections exist
  const requiredSections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
  const missingSections = requiredSections.filter(id => !document.getElementById(id));
  
  if (missingSections.length === 0) {
    console.log('✓ All required sections present');
  } else {
    console.warn('⚠ Missing sections:', missingSections);
  }
  
  // Check if CSS variables are defined
  const rootStyles = getComputedStyle(document.documentElement);
  const requiredVars = ['--canvas', '--primary', '--surface-1'];
  const missingVars = requiredVars.filter(varName => !rootStyles.getPropertyValue(varName));
  
  if (missingVars.length === 0) {
    console.log('✓ CSS variables defined');
  } else {
    console.warn('⚠ Missing CSS variables:', missingVars);
  }
  
  // Check if nav menu works
  if (mobileMenuToggle && navMenu) {
    console.log('✓ Mobile menu elements found');
  } else {
    console.warn('⚠ Mobile menu elements missing');
  }
});