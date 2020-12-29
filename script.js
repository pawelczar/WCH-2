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

// console.log(menuLinks);
// for(atr of menuLinks) {
//     atr.href = "";
//     console.log(atr);
// }


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

const menuSelection = function (e) {
    e.preventDefault();
    let link = e.target.innerText.toLowerCase();
    console.log(link);
    switch(link){
        case 'contact': 
            console.log(contact);
            const scroll = contact.offsetTop;
            console.log(scroll);
            window.scrollTo(0, scroll);
            window.scrollBy(0,-60);
            break;
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
function newFunction() {
    contact.scrollIntoView();
}

