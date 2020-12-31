const home = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const gallery = document.querySelector('.gallery');
const subscribe = document.querySelector('.subscribe');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');

const hamburger = document.querySelector('.nav__hamburger');
const navBar = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu');
const subscribeForm = document.querySelector('.subscribe__form');
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.nav__item > a');

const prevSubmit = function (e){
    e.preventDefault();
}

const activeToggle = function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    if(!navBar.classList.contains('active')) {
        navBar.classList.add('active');
    }
}

const scrollToPos = function (link) {
        console.log(link);
         const scrollVal =(link.offsetTop)-60;
         console.log(scrollVal);
         window.scrollTo(0, scrollVal);
}

const menuSelection = function (e) {
    e.preventDefault();
    let link = e.target.innerText.toLowerCase();
    switch(link){
        case 'home':
            scrollToPos(header);
            break;
        case 'about':
            scrollToPos(about);
            break;
        case 'services':
            scrollToPos(services);
            break;
        case 'gallery':
            scrollToPos(gallery);
            break;
        case 'subscribe':
            scrollToPos(subscribe);
            break;
        case 'blog':
            scrollToPos(blog);
            break;
        case 'contact': 
            scrollToPos(contact);
        default:
            console.log("default case from switch");
    }
    activeToggle();
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

hamburger.addEventListener('click', activeToggle);

for( let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', menuSelection);
}

subscribeForm.addEventListener('submit',prevSubmit);

