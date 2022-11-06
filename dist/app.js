const page = document.querySelector('html');
const header = document.querySelector('#header');
const themeToggler = document.querySelector('#themeToggler');
const menuToggler = document.querySelector('#menuToggler');
const menuButtonBars = document.querySelector('#menuButtonBars');
const menuButtonCross = document.querySelector('#menuButtonCross');
const menu = document.querySelector('#menu');
const submitButton = document.querySelector('#submitButton');
const subscribeInput = document.querySelector('#subscribeInput');
let menuIsActive = false;

const toggleMenu = () => {
  document.body.classList.toggle('overflow-hidden');
  menuButtonBars.classList.toggle('hidden');
  menuButtonCross.classList.toggle('hidden');
  menu.classList.toggle('-translate-y-full');
  menuIsActive = !menuIsActive;
};

const toggleTheme = () => {
  page.classList.toggle('dark');
};

menuToggler.addEventListener('click', toggleMenu);
themeToggler.addEventListener('click', toggleTheme);
header.addEventListener('click', ({ target }) => {
  const headerLink = target.closest('a');
  const navLink = target.closest('.link');

  if (headerLink && menuIsActive) {
    toggleMenu();
  };

  if (navLink) {
    const activeNavLink = menu.querySelector('.link_active');
    
    if (activeNavLink) {
      activeNavLink.classList.remove('link_active');
    }

    navLink.classList.add('link_active');
  };

});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const form = e.target.closest('form');

  if (!form) return;

  subscribeInput.value = '';
});
