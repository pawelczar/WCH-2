const home = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const gallery = document.querySelector('.gallery');
const subscribe = document.querySelector('.subscribe');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');
const html = document.querySelector('html');

const hamburger = document.querySelector('.nav__hamburger');
const navBar = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu');
const subscribeForm = document.querySelector('.subscribe__form');
const menuItems = document.querySelectorAll('.nav__item');
const menuLinks = document.querySelectorAll('.nav__item > a');

let scrollPos;
let previousScroll = 0;

const SCROLL_OFFSET = 60;
const MENU_BAR_OFFSET = 71;

const handleSubmit = function (e) {
  e.preventDefault();
};

const toggleMenu = function () {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  if (!navBar.classList.contains('active')) {
    navBar.classList.add('active');
  }
};

const scrollToPos = function (target) {
  const scrollVal = target.offsetTop;
  if (scrollVal < scrollY) {
    window.scrollTo(0, scrollVal - SCROLL_OFFSET);
  } else {
    window.scrollTo(0, scrollVal);
  }
};

const handleMenuSelection = function (e) {
  e.preventDefault();
  let link = e.target;
  let id = link.hash;
  let menuTarget = document.querySelector(`${id}`);
  scrollToPos(menuTarget);
  toggleMenu();
};

const removeActiveClass = (current) => {
  current.classList.add('active');
  for (item of menuItems) {
    if (item.classList.contains('active') && item !== current) {
      item.classList.remove('active');
    }
  }
};

const getScrollPos = () => {
  scrollPos = scrollY;
  let current;
  const homePos = home.getBoundingClientRect();
  const aboutPos = about.getBoundingClientRect();
  const servicesPos = services.getBoundingClientRect();
  const galleryPos = gallery.getBoundingClientRect();
  const subscribePos = subscribe.getBoundingClientRect();
  const blogPos = blog.getBoundingClientRect();
  const contactPos = contact.getBoundingClientRect();


  if (homePos.height / 2 <= aboutPos.y) {
    current = menuItems[0];
    removeActiveClass(current);
  } else if (aboutPos.height / 2 <= servicesPos.y) {
    current = menuItems[1];
    removeActiveClass(current);
  } else if (servicesPos.height / 2 <= galleryPos.y) {
    current = menuItems[2];
    removeActiveClass(current);
  } else if (galleryPos.height / 2 <= subscribePos.y) {
    current = menuItems[3];
    removeActiveClass(current);
  } else if (subscribePos.height / 2 <= blogPos.y) {
    current = menuItems[4];
    removeActiveClass(current);
  } else if (blogPos.height / 2 <= contactPos.y) {
    current = menuItems[5];
    removeActiveClass(current);
  } else {
    current = menuItems[6];
    removeActiveClass(current);
  }
};

window.addEventListener('scroll', function () {
  getScrollPos();
  if (window.scrollY < MENU_BAR_OFFSET) {
    navBar.classList.remove('active');
    previousScroll = window.scrollY;
  } else {
    navBar.classList.add('active');
    if (window.scrollY >= previousScroll) {
      navBar.classList.add('slideIn');
      previousScroll = window.scrollY;
    } else {
      navBar.classList.remove('slideIn');
      previousScroll = window.scrollY;
    }
  }
});

hamburger.addEventListener('click', toggleMenu);

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', handleMenuSelection);
}

subscribeForm.addEventListener('submit', handleSubmit);
