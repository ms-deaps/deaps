document.querySelector('#year').textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
const updateHero = () => {
  const collapsed = window.scrollY > 0;
  hero.classList.toggle('is-scrolling-away', collapsed);
  hero.setAttribute('aria-hidden', String(collapsed));
};

window.addEventListener('scroll', updateHero, { passive: true });
updateHero();
