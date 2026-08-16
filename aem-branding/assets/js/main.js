const sidenav = document.getElementById('sidenav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => sidenav.classList.toggle('open'));
sidenav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sidenav.classList.remove('open')));

const links = Array.from(sidenav.querySelectorAll('ul a[href^="#"]'));
const targets = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = '#' + entry.target.id;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

targets.forEach(t => observer.observe(t));

document.querySelectorAll('.color-swatch').forEach(btn => {
  btn.addEventListener('click', async () => {
    const hex = btn.dataset.hex;
    try {
      await navigator.clipboard.writeText(hex);
      const hint = document.getElementById('copyHint');
      hint.textContent = `Copied ${hex} to clipboard`;
      setTimeout(() => { hint.textContent = ' '; }, 2000);
    } catch (e) {
      /* clipboard unavailable — silently ignore */
    }
  });
});

const sigCopy = document.getElementById('sigCopy');
if (sigCopy) {
  sigCopy.addEventListener('click', async () => {
    const source = document.getElementById('sigSource').textContent;
    try {
      await navigator.clipboard.writeText(source);
      const hint = document.getElementById('sigCopyHint');
      hint.textContent = 'Copied signature HTML to clipboard';
      setTimeout(() => { hint.textContent = ' '; }, 2000);
    } catch (e) {
      /* clipboard unavailable — silently ignore */
    }
  });
}
