const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const archiveButton = document.getElementById('archive-button');
const archivePanel = document.getElementById('archive-panel');

if (archiveButton && archivePanel) {
  archiveButton.addEventListener('click', () => {
    const isOpen = archiveButton.getAttribute('aria-expanded') === 'true';
    archiveButton.setAttribute('aria-expanded', String(!isOpen));
    archivePanel.hidden = isOpen;
  });
}
