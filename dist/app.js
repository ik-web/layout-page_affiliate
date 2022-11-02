const page = document.querySelector('html');
const themeToggler = document.querySelector('#themeToggler');
const menuToggler = document.querySelector('#menuToggler');
const menuButtonBars = document.querySelector('#menuButtonBars');
const menuButtonCross = document.querySelector('#menuButtonCross');
const menu = document.querySelector('#menu');
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
menu.addEventListener('click', ({ target }) => {
  const link = target.closest('a');

  if (link && menuIsActive) {
    toggleMenu();
  };

  if (link) {
    const activeLink = menu.querySelector('.link_active');
    
    if (activeLink) {
      activeLink.classList.remove('link_active');
    }

    link.classList.add('link_active');
  };

});
