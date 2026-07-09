// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero "session" clock -- purely decorative, ticks up from 0
const clockEl = document.getElementById('sessionClock');
if (clockEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

// Scroll reveal
const revealTargets = document.querySelectorAll('.lap, .trust-item, .score-item, .teams-inner');
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Early access form -- placeholder handler.
// Replace this with a POST to your backend's signup/waitlist endpoint
// (or a third-party form service) once one is wired up.
const earlyForm = document.getElementById('earlyForm');
const formNote = document.getElementById('formNote');

if (earlyForm && formNote) {
  earlyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('earlyEmail').value.trim();
    if (!email) return;

    // TODO: wire this to a real endpoint, e.g.:
    // fetch('/api/early-access', { method: 'POST', body: JSON.stringify({ email }) })
    console.log('Early access request (not yet wired to a backend):', email);

    formNote.textContent = "Thanks -- we'll be in touch as seats open up.";
    earlyForm.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
