/* =========================================================
   CyberHub Bangladesh V4
   script.js
   ========================================================= */

"use strict";

/* =========================================================
   DOM Elements
   ========================================================= */

const body = document.body;

const header = document.querySelector(".main-header");

const progressBar = document.getElementById("progressBar");

const scrollTopButton = document.getElementById("scrollTop");

const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

const themeToggle = document.getElementById("themeToggle");

const contactForm = document.getElementById("contactForm");

const faqItems = document.querySelectorAll(".faq-item");

const faqButtons = document.querySelectorAll(".faq-question");

const counterElements = document.querySelectorAll("[data-counter]");

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .trusted-card, .service-card, .feature-box, .about-content, .about-visual, .process-card, .faq-item, .contact-info, .contact-form"
);


/* =========================================================
   Header + Progress + Scroll Button
   ========================================================= */

function handleScroll() {

    const scrollTop = window.pageYOffset;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

    if (scrollTop > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    if (scrollTop > 450) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

}

window.addEventListener("scroll", handleScroll);

handleScroll();


/* =========================================================
   Scroll To Top
   ========================================================= */

scrollTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   Mobile Menu
   ========================================================= */

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});


/* =========================================================
   Theme Toggle
   ========================================================= */

const savedTheme = localStorage.getItem("cyberhub-theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem(
            "cyberhub-theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "cyberhub-theme",
            "light"
        );

    }

});


/* =========================================================
   FAQ Accordion
   ========================================================= */

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentItem =
            button.parentElement;

        faqItems.forEach(item => {

            if (item !== currentItem) {

                item.classList.remove("active");

                item.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        currentItem.classList.toggle("active");

        const answer =
            currentItem.querySelector(".faq-answer");

        if (currentItem.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/* =========================================================
   Counter Animation
   ========================================================= */

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const trigger =
        window.innerHeight * 0.85;

    const section =
        document.querySelector(".about");

    if (!section) return;

    const position =
        section.getBoundingClientRect().top;

    if (position > trigger) return;

    counterStarted = true;

    counterElements.forEach(counter => {

        const target =
            Number(counter.dataset.counter);

        let value = 0;

        const duration = 1800;

        const step =
            Math.max(
                1,
                Math.ceil(target / (duration / 20))
            );

        const timer = setInterval(() => {

            value += step;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            counter.textContent =
                value.toLocaleString("bn-BD");

        }, 20);

    });

}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();


/* =========================================================
   Reveal Animation
   ========================================================= */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.15

        }

    );

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        ".7s ease";

    revealObserver.observe(element);

});


/* =========================================================
   Contact Form
   ========================================================= */

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    if (name === "") {

        alert("অনুগ্রহ করে আপনার নাম লিখুন।");

        return;

    }

    alert(
        "ধন্যবাদ! আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে।"
    );

    contactForm.reset();

});


/* =========================================================
   Active Navigation
   ========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-menu a, .mobile-menu a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 140;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   End
   ========================================================= */
