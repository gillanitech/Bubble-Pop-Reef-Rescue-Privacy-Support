'use strict';
const printButton = document.querySelector('#print-policy');
if (printButton) { printButton.hidden = false; printButton.addEventListener('click', () => window.print()); }
const progress = document.querySelector('.read-progress i');
let scheduled = false;
function refreshReadingState() {
  scheduled = false;
  const remaining = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${remaining > 0 ? Math.min(100, Math.max(0, window.scrollY / remaining * 100)) : 100}%`;
  const sections = [...document.querySelectorAll('.policy-section')];
  const current = sections.filter(section => section.getBoundingClientRect().top <= 180).pop() || sections[0];
  document.querySelectorAll('.contents nav a').forEach(link => {
    const active = current && link.hash === `#${current.id}`;
    link.classList.toggle('active', Boolean(active));
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
function scheduleRefresh() { if (!scheduled) { scheduled = true; window.requestAnimationFrame(refreshReadingState); } }
window.addEventListener('scroll', scheduleRefresh, { passive: true });
window.addEventListener('resize', scheduleRefresh);
refreshReadingState();
