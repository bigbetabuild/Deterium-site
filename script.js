const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
