/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass =this.parentNode.className
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className ='skills__content skills__open'
    }
}


skillsHeader.forEach( (e)  =>  {e.addEventListener('click',toggleSkills) } )
/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{tab.addEventListener('click',()=>{
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualification__active')
    })

    target.classList.add('qualification__active')
    tabs.forEach(tab =>{
        tab.classList.remove('qualification__active')
        
    })
    tab.classList.add('qualification__active')
})})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container ", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container ", {
    loop:true,
    grabCursor:true,
    spaceBetween:48,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId =current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader) 

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp =document.getElementById('scroll-up');
    if(this.scrollY >=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon = ()=> document.body.classList.contains(iconTheme)? 'uil-moon':'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedTheme==='uil-moon'?'add':'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})



/*==================== SLIDER ====================*/ 

let slides = document.getElementsByClassName('slides');

let navlinks = document.getElementsByClassName('slideDot');
let currentSlide = 0;

document.getElementById('next').addEventListener('click',()=>{
    changeSlide(currentSlide +1);
});

document.getElementById('prev').addEventListener('click',()=>{
    changeSlide(currentSlide - 1);
});

function changeSlide(currentSlideValue){
    if(currentSlideValue >= slides.length){
        currentSlideValue = 0;
    }
    if(currentSlideValue < 0){
        currentSlideValue = slides.length-1;
    }
    
    slides[currentSlide].classList.toggle('active');
    navlinks[currentSlide].classList.toggle('activeDot');
    slides[currentSlideValue].classList.toggle('active');
    navlinks[currentSlideValue].classList.toggle('activeDot');
    currentSlide = currentSlideValue;
}

document.querySelectorAll(".slideDot").forEach((bullet,bulletIndex)=>{
    bullet.addEventListener('click',()=>{
        if(currentSlide != bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});

window.onload = setInterval(function(){
    changeSlide(currentSlide+1)
    
},4300);


window.onload = function() {
    var audio = document.getElementById("my_audio");
    audio.volume = 0.3;
    audio.play();
}


// ---------------------audio------------------

function Play()
{
    var myAudio = document.getElementById("audioval");
    myAudio.volume = 0.1;
  var aud = document.getElementById("aud");
  

    if(myAudio.paused)
    {

      aud.classList.remove("uil-volume-mute");
        myAudio.play();
      aud.classList.add("uil-volume-up");
console.log(aud);
    }
    else
    {
      aud.classList.remove("uil-volume-up");
       myAudio.pause();
      aud.classList.add("uil-volume-mute");
    }
}



