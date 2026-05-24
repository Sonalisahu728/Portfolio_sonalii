// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ── TYPING EFFECT FOR HERO TITLE ──
const titleEl = document.querySelector('.hero-title');
if (titleEl) {
  const texts = [
    'Java Developer · <span>Spring Boot</span> · Full Stack · ML',
    'Backend Developer · <span>REST APIs</span> · PostgreSQL · JPA',
    'Open to Work · <span>Bangalore</span> · Available Now',
  ];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % texts.length;
    titleEl.style.opacity = '0';
    setTimeout(() => {
      titleEl.innerHTML = texts[idx];
      titleEl.style.opacity = '1';
      titleEl.style.transition = 'opacity 0.5s ease';
    }, 300);
  }, 3000);
}

// ── SMOOTH SCROLL FOR NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── NAV BACKGROUND ON SCROLL ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(5,8,15,0.97)';
  } else {
    nav.style.background = 'rgba(5,8,15,0.8)';
  }
});
