// ═══════════════════════════════════════════════════════
//  THE FLINTSTONES — Main JS
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL ────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ─── MOBILE DRAWER ────────────────────────────────────
  const toggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }

  // ─── SCROLL ANIMATIONS ────────────────────────────────
  const observers = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window && observers.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observers.forEach(el => io.observe(el));
  } else {
    observers.forEach(el => el.classList.add('visible'));
  }

  // ─── FLASH DISMISS ────────────────────────────────────
  document.querySelectorAll('.flash').forEach(flash => {
    setTimeout(() => flash.remove(), 5000);
    flash.addEventListener('click', () => flash.remove());
  });

  // ─── SMOOTH ANCHOR SCROLL ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
