'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

// _____________________________________________








/* ==========================================================
   NEXSHAM HERO
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       HERO FADE IN
    ========================================== */

    const hero = document.querySelector(".hero");

    hero.classList.add("hero-loaded");



    /* ==========================================
       FLOATING CARDS ON SCROLL
    ========================================== */

    const cards = document.querySelectorAll(".floating-card");

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        cards.forEach((card, index) => {

            const speed = (index + 1) * 0.08;

            card.style.transform =
                `translateY(${scroll * speed}px)`;

        });

    });



    /* ==========================================
       TECHNOLOGY HOVER EFFECT
    ========================================== */

    const techItems = document.querySelectorAll(".hero-tech span");

    techItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.transform = "translateY(-6px) scale(1.05)";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translateY(0) scale(1)";

        });

    });



    /* ==========================================
       BUTTON RIPPLE
    ========================================== */

    const buttons = document.querySelectorAll(".hero-buttons .btn");

    buttons.forEach(button => {

        button.addEventListener("click", function(e){

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth,this.clientHeight);

            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;

            circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;

            circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });



    /* ==========================================
       HERO IMAGE TILT
    ========================================== */

    const heroImage = document.querySelector(".hero-image img");

    document.querySelector(".hero-image").addEventListener("mousemove",(e)=>{

        const rect = heroImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*10;

        const rotateX = ((y / rect.height)-0.5)*-10;

        heroImage.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)`;

    });

    document.querySelector(".hero-image").addEventListener("mouseleave",()=>{

        heroImage.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});













