// ── QuickAITools - Main JS ──

// Toast
function showToast(msg, color) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.style.background = color || '#10b981';
  t.textContent = msg; t.style.opacity = '1';
  clearTimeout(t._to);
  t._to = setTimeout(() => t.style.opacity = '0', 2400);
}

// Copy text
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copied to clipboard!'))
    .catch(() => showToast('Copy failed', '#ef4444'));
}

// Hamburger
function initNav() {
  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => menu.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
  });
}

// Active nav link
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path || (path.includes(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
  });
}

// FAQ accordion
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
}

// Status dot helper
function setDot(id, state) {
  const d = document.getElementById(id);
  if (d) { d.className = 'dot' + (state ? ' ' + state : ''); }
}

// File to base64
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('File read failed'));
    r.readAsDataURL(file);
  });
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  setActiveNav();
  initFAQ();
});
