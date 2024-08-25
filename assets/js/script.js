'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// slider
const slider = document.getElementById('slider');
    const slideCount = 22;
    const slidesPerViewDefault = 6;
    let slidesPerView = slidesPerViewDefault;
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex += slidesPerView;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const slideWidth = slider.querySelector('.slide').offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function updateSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 400) {
            slidesPerView = 1;
        } else if (width <= 576) {
            slidesPerView = 2;
        } else if (width <= 768) {
            slidesPerView = 3;
        } else if (width <= 992) {
            slidesPerView = 4;
        } else if (width <= 1200) {
            slidesPerView = 5;
        } else {
            slidesPerView = slidesPerViewDefault;
        }
        currentIndex = 0; // Reset to start
        updateSlider();
    }

    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView(); // Initial setup
    setInterval(moveToNextSlide, 12000); // Change slide every 4 seconds


    const mslider = document.getElementById('mslider');
    const mslideCount = 12;
    const mslidesPerViewDefault = 6;
    let mslidesPerView = mslidesPerViewDefault;
    let mcurrentIndex = 0;

    function mmoveToNextSlide() {
        mcurrentIndex += mslidesPerView;
        if (mcurrentIndex >= mslideCount) {
            mcurrentIndex = 0;
        }
        mupdateSlider();
    }

    function mupdateSlider() {
        const mslideWidth = mslider.querySelector('.mslide').offsetWidth;
        mslider.style.transform = `translateX(-${mcurrentIndex * mslideWidth}px)`;
    }

    function mupdateSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 400) {
            mslidesPerView = 1;
        } else if (width <= 576) {
            mslidesPerView = 2;
        } else if (width <= 768) {
            mslidesPerView = 3;
        } else if (width <= 992) {
            mslidesPerView = 4;
        } else if (width <= 1200) {
            mslidesPerView = 5;
        } else {
            mslidesPerView = mslidesPerViewDefault;
        }
        mcurrentIndex = 0; // Reset to start
        mupdateSlider();
    }

    window.addEventListener('resize', mupdateSlidesPerView);
    mupdateSlidesPerView(); // Initial setup
    setInterval(mmoveToNextSlide, 6000); // Change slide every 6 seconds