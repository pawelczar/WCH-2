const hamburger = document.querySelector('.nav__hamburger');
const navBar = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu');
const subscribeForm = document.querySelector('.subscribe__form');
const header = document.querySelector('.header');

const prevSubmit = function (e){
    e.preventDefault();
}

const activeToggle = function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    if(!navBar.classList.contains('active')) {
        navBar.classList.add('active');
    }
}

document.addEventListener('scroll', function(){
    if (window.scrollY < 71) {
        navBar.classList.remove('active');
    }
    else
    {
        navBar.classList.add('active');
    }
});

subscribeForm.addEventListener('submit',prevSubmit);
hamburger.addEventListener('click', activeToggle);

