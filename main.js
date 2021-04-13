const nav = document.querySelector('.navbar');
const navMenu = document.querySelector('.navbar__menu');
const burger = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  let scrollY = this.scrollY;
  let isFixed = nav.classList.contains('scroll');

  if(scrollY > 0 && !isFixed) {
    nav.classList.add('scroll');
  } else if(scrollY === 0 && isFixed) {
    nav.classList.remove('scroll');
  }
});

burger.addEventListener('click', (event) => {
  navMenu.classList.toggle('mobile-active');
});

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 0.8,
  opacity: 0,
  y: -150,
});

gsap.from('.animate-transport', {
  scrollTrigger: '.animate-transport',
  duration: 0.4,
  opacity: 0,
  y: -20,
  stagger: 0.2,
});

gsap.from('.animate-services-header', {
  scrollTrigger: '.animate-services-card',
  duration: 0.6,
  opacity: 0,
  y: -60,
});

gsap.from('.animate-services-card', {
  scrollTrigger: '.animate-services-card',
  duration: 0.6,
  opacity: 0,
  y: -40,
  stagger: 0.2
});

gsap.from('.animate-vehicles-header', {
  scrollTrigger: '.animate-vehicles-card',
  duration: 0.6,
  opacity: 0,
  y: -60,
});

gsap.from('.animate-vehicles-card', {
  scrollTrigger: '.animate-vehicles-card',
  duration: 0.2,
  opacity: 0,
  x: -40,
  stagger: 0.1
});

gsap.from('.animate-vehicles-content-img', {
  scrollTrigger: '.animate-vehicles-content',
  duration: 0.4,
  opacity: 0,
  y: 100,
});

gsap.from('.animate-vehicles-content-text', {
  scrollTrigger: '.animate-vehicles-content',
  duration: 0.4,
  opacity: 0,
  x: 80
});

gsap.from('.animate-team-header', {
  scrollTrigger: '.animate-team-header',
  duration: 0.6,
  opacity: 0,
  y: -60,
});

gsap.from('.animate-team-card', {
  scrollTrigger: '.animate-team-card',
  duration: 0.6,
  opacity: 0,
  x: 30,
  stagger: 0.2
});

gsap.from('.animate-social', {
  scrollTrigger: '.animate-social',
  duration: 0.6,
  opacity: 0,
  y: 60,
  stagger: 0.2,
});