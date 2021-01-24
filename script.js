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
const header = document.querySelector('.header');
const menuItems = document.querySelectorAll('.nav__item');
const menuLinks = document.querySelectorAll('.nav__item > a');

let scrollPos;
let previousScroll = 0;;

const prevSubmit = function (e){
    e.preventDefault();
}

const menuToggle = function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    if(!navBar.classList.contains('active')) {
        navBar.classList.add('active');
    }
}

const scrollToPos = function (link) {
         const scrollVal =(link.offsetTop);
         if (scrollVal < scrollY){
             window.scrollTo(0, (scrollVal-60));
            }else{
             window.scrollTo(0, (scrollVal));
         }
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
    menuToggle();
}

const removeActiveClass = (current) => {
    current.classList.add('active');
    for(item of menuItems){
        if(item.classList.contains('active') && item !== current){
            item.classList.remove('active');

        }
    }
}

const getScrollPos = () =>{
    scrollPos = scrollY;
    let current;
    const homePos = home.getBoundingClientRect();
    const aboutPos = about.getBoundingClientRect();
    const servicesPos = services.getBoundingClientRect();
    const galleryPos = gallery.getBoundingClientRect();
    const subscribePos = subscribe.getBoundingClientRect();
    const blogPos = blog.getBoundingClientRect();
    const contactPos = contact.getBoundingClientRect();

    if (homePos.height/2 <= aboutPos.y){
        current = menuItems[0];
        removeActiveClass(current);
    }else if(aboutPos.height/2 <= servicesPos.y){
        current = menuItems[1];
        removeActiveClass(current);
    }else if(servicesPos.height/2 <= galleryPos.y){
        current = menuItems[2];
        removeActiveClass(current);
    }else if(galleryPos.height/2 <= subscribePos.y){
        current = menuItems[3];
        removeActiveClass(current);
    }else if(subscribePos.height/2 <= blogPos.y){
        current = menuItems[4];
        removeActiveClass(current);
    }else if(blogPos.height/2 <= contactPos.y){
        current = menuItems[5];
        removeActiveClass(current);
    }else{
        current = menuItems[6];
        removeActiveClass(current);
    }
}

window.addEventListener('scroll', function(){
    getScrollPos();
    if (window.scrollY < 71) {
        navBar.classList.remove('active');
        previousScroll = window.scrollY;
    }
    else
    {   
        navBar.classList.add('active');
                if(window.scrollY >= previousScroll){
            navBar.classList.add('slideIn');
            previousScroll = window.scrollY;
        }else{
            navBar.classList.remove('slideIn');
            previousScroll = window.scrollY;
        }
    }
});

hamburger.addEventListener('click', menuToggle);

for( let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', menuSelection);
}

subscribeForm.addEventListener('submit',prevSubmit);

