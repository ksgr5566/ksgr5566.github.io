// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// Active link highlight using IntersectionObserver
const sections = ['about','education','skills','experience','projects','publications','contact'];
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.5 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

// Reveal-on-scroll
const revealables = document.querySelectorAll('.reveal, .section-title, .card, .icons, .hero-actions');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealables.forEach(el => revealObserver.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
