const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('.nav-list');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    close.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    close.classList.remove('active');
  });
}

const links = document.querySelectorAll('.link');
Array.from(links).forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    close.classList.remove('active');
  });
});