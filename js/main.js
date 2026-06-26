/* Gough & Co – main.js */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Sticky header shadow on scroll ── */
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ── Hamburger / mobile menu ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close mobile menu on link click */
  mobileMenu.querySelectorAll('.mm-link, .mm-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  /* ── Active bottom-nav item on scroll ── */
  const sections = ['hero', 'services', 'testimonials', 'contact'];
  const bnItems  = {
    hero:         document.getElementById('bn-home'),
    services:     document.getElementById('bn-services'),
    testimonials: document.getElementById('bn-reviews'),
    contact:      document.getElementById('bn-contact'),
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        Object.values(bnItems).forEach(function (el) { el && el.classList.remove('active'); });
        const active = bnItems[entry.target.id];
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* ── Contact form validation ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = document.getElementById('form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      /* Simulate send (replace with real fetch/endpoint) */
      setTimeout(function () {
        btn.textContent = 'Sent! We\'ll be in touch.';
        btn.style.background = '#2a7a4b';
        form.reset();
      }, 1500);
    });
  }
});
