const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#quoteForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  note.textContent = 'Thanks! In a production site, this form would now send the request to Haynes Striping.';
  note.style.fontWeight = '700';
});