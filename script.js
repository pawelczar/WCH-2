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
const menuItems = document.querySelectorAll('.nav__item');
const menuLinks = document.querySelectorAll('.nav__item > a');


let scrollPos;
console.log(menuLinks[0]);

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
    menuToggle();
}

const removeActiveClass = (current) => {
    current.classList.add('active');
    for(item of menuLinks){
        if(item.classList.contains('active') && item !== current){
            item.classList.remove('active');
        }
    }
}

const getScrollPos = () =>{
    scrollPos = scrollY;
    let current;
    if(scrollPos <= header.offsetHeight-80){ //HOME
        current = menuLinks[0]; 
        removeActiveClass(current);
    }else if (scrollPos<=header.offsetHeight+about.offsetTop-80){ //ABOUT US
        current = menuLinks[1];
        console.log(current);
        removeActiveClass(current);
    }else if (scrollPos<=services.offsetHeight+services.offsetTop-80){ //SERVICES
        current = menuLinks[2];
        removeActiveClass(current);
    }else if (scrollPos<=gallery.offsetHeight + gallery.offsetTop - 80){ //GALLERY
        current = menuLinks[3];
        removeActiveClass(current);
    }else if (scrollPos<=subscribe.offsetHeight + subscribe.offsetTop - 80){ //  // SUBSCRIBE
        current = menuLinks[4];
        removeActiveClass(current);
    }else if (scrollPos<=blog.offsetHeight + blog.offsetTop - 80){ //BLOG
        current = menuLinks[5];
        removeActiveClass(current);
    }else{
        current = menuLinks[6];
        removeActiveClass(current);
    }
}



window.addEventListener('scroll', function(){
    getScrollPos();
    if (window.scrollY < 71) {
        navBar.classList.remove('active');
    }
    else
    {
        navBar.classList.add('active');
    }
});

hamburger.addEventListener('click', menuToggle);

for( let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', menuSelection);
}

subscribeForm.addEventListener('submit',prevSubmit);

