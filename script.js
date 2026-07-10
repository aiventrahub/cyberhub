"use strict";

/* ==========================================================
   CyberHub Bangladesh V5
   script.js Part 1A
   ========================================================== */


/* ==========================================================
   DOM Elements
   ========================================================== */

const body = document.body;

const loader = document.querySelector(".loader");

const header = document.querySelector(".header");

const progressBar = document.querySelector(".scroll-progress");

const themeButton = document.querySelector(".theme-toggle");

const backToTop = document.querySelector(".back-to-top");


/* ==========================================================
   Loader
   ========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {

            loader.classList.add("hide");

        }

    }, 900);

});


/* ==========================================================
   Theme
   ========================================================== */

const THEME_KEY = "cyberhub-theme";

function enableDarkTheme() {

    body.classList.add("dark-mode");

    localStorage.setItem(THEME_KEY, "dark");

    if (themeButton) {

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

}

function enableLightTheme() {

    body.classList.remove("dark-mode");

    localStorage.setItem(THEME_KEY, "light");

    if (themeButton) {

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}

(function () {

    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark") {

        enableDarkTheme();

    } else {

        enableLightTheme();

    }

})();

if (themeButton) {

    themeButton.addEventListener("click", () => {

        body.classList.contains("dark-mode")

            ? enableLightTheme()

            : enableDarkTheme();

    });

}


/* ==========================================================
   Header + Scroll Progress
   ========================================================== */

function updateScrollUI() {

    if (window.scrollY > 60) {

        header?.classList.add("scrolled");

    } else {

        header?.classList.remove("scrolled");

    }

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    if (progressBar) {

        progressBar.style.width = `${progress}%`;

    }

    if (window.scrollY > 400) {

        backToTop?.classList.add("show");

    } else {

        backToTop?.classList.remove("show");

    }

}

window.addEventListener("scroll", updateScrollUI);

updateScrollUI();


/* ==========================================================
   Back To Top
   ========================================================== */

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================================================
   Mobile Menu
   ========================================================== */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const closeMenu = document.querySelector(".close-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

menuToggle?.addEventListener("click", () => {

    mobileMenu?.classList.add("active");

    body.style.overflow = "hidden";

});

closeMenu?.addEventListener("click", closeMobileMenu);

mobileLinks.forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});

function closeMobileMenu(){

    mobileMenu?.classList.remove("active");

    body.style.overflow = "";

}


/* ==========================================================
   Search Overlay
   ========================================================== */

const searchToggle =
    document.querySelector(".search-toggle");

const searchOverlay =
    document.querySelector(".search-overlay");

const closeSearch =
    document.querySelector(".close-search");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


const searchableItems = [

    "Windows Setup",

    "Office Installation",

    "Premium VPN",

    "Cyber Security",

    "Windows 11",

    "Office 365",

    "Driver Setup",

    "Remote Support"

];


searchToggle?.addEventListener("click", () => {

    searchOverlay?.classList.add("active");

    body.style.overflow = "hidden";

    setTimeout(() => {

        searchInput?.focus();

    },200);

});


closeSearch?.addEventListener("click", closeSearchOverlay);


searchOverlay?.addEventListener("click",(e)=>{

    if(e.target===searchOverlay){

        closeSearchOverlay();

    }

});


function closeSearchOverlay(){

    searchOverlay?.classList.remove("active");

    body.style.overflow="";

    if(searchInput){

        searchInput.value="";

    }

    if(searchResults){

        searchResults.innerHTML="";

    }

}


searchInput?.addEventListener("input",function(){

    const keyword=this.value.trim().toLowerCase();

    searchResults.innerHTML="";

    if(keyword==="") return;

    const results=searchableItems.filter(item=>

        item.toLowerCase().includes(keyword)

    );

    if(results.length===0){

        searchResults.innerHTML=

        `<div class="search-empty">

            কোনো ফলাফল পাওয়া যায়নি।

        </div>`;

        return;

    }

    results.forEach(item=>{

        const div=document.createElement("div");

        div.className="search-item";

        div.innerHTML=`

            <i class="fa-solid fa-magnifying-glass"></i>

            <span>${item}</span>

        `;

        searchResults.appendChild(div);

    });

});


/* ==========================================================
   FAQ Accordion
   ========================================================== */

const faqItems=

document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button=

    item.querySelector(".faq-question");

    button?.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq!==item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/* ==========================================================
   ESC Key
   ========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMobileMenu();

        closeSearchOverlay();

    }

});
/* ==========================================================
   Counter Animation
   ========================================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const triggerPoint = statsSection.offsetTop - window.innerHeight + 120;

    if (window.scrollY < triggerPoint) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let value = 0;

        const step = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {

            value += step;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            counter.textContent = value;

        }, 20);

    });

}

window.addEventListener("scroll", runCounters);

runCounters();


/* ==========================================================
   Testimonial Slider
   ========================================================== */

const testimonialCards =
document.querySelectorAll(".testimonial-card");

const prevButton =
document.querySelector(".slider-prev");

const nextButton =
document.querySelector(".slider-next");

let currentSlide = 0;

function showSlide(index){

    if(!testimonialCards.length) return;

    testimonialCards.forEach(card=>{

        card.style.display="none";

        card.classList.remove("active");

    });

    testimonialCards[index].style.display="block";

    testimonialCards[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=testimonialCards.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

function previousSlide(){

    currentSlide--;

    if(currentSlide<0){

        currentSlide=testimonialCards.length-1;

    }

    showSlide(currentSlide);

}

if(testimonialCards.length){

    showSlide(currentSlide);

    setInterval(nextSlide,5000);

}

nextButton?.addEventListener("click",nextSlide);

prevButton?.addEventListener("click",previousSlide);


/* ==========================================================
   Apps Category Filter
   ========================================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

const appCards =
document.querySelectorAll(".app-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        appCards.forEach(card=>{

            const category =
            card.dataset.category;

            if(filter==="all"){

                card.style.display="block";

                return;

            }

            if(category===filter){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

});
/* ==========================================================
   WhatsApp Auto Order
   ========================================================== */

const WHATSAPP_NUMBER = "8801580804835";

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.dataset.product || "Unknown";

        const category =
            button.dataset.category || "General";

        const price =
            button.dataset.price || "N/A";

        const message = `আসসালামু আলাইকুম,

আমি নিচের সার্ভিসটি অর্ডার করতে চাই।

━━━━━━━━━━━━━━

🛍️ Product : ${product}

📂 Category : ${category}

💰 Price : ৳${price}

━━━━━━━━━━━━━━

অনুগ্রহ করে বিস্তারিত জানাবেন।`;

        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});


/* ==========================================================
   Contact Form
   ========================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm?.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs =
        contactForm.querySelectorAll("input, textarea");

    const name = inputs[0].value.trim();

    const phone = inputs[1].value.trim();

    const email = inputs[2].value.trim();

    const message = inputs[3].value.trim();

    const whatsappMessage = `আসসালামু আলাইকুম,

নতুন যোগাযোগ

👤 নাম : ${name}

📱 মোবাইল : ${phone}

📧 Email : ${email || "প্রযোজ্য নয়"}

📝 বার্তা :

${message}`;

    window.open(

        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,

        "_blank"

    );

    contactForm.reset();

});


/* ==========================================================
   Scroll Reveal Animation
   ========================================================== */

const revealElements = document.querySelectorAll(

    ".section, .service-card, .app-card, .pricing-card, .testimonial-card, .stat-card, .brand-item, .about-item"

);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =

        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* ==========================================================
   Smooth Anchor Scroll
   ========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* ==========================================================
   Active Navigation
   ========================================================== */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});


/* ==========================================================
   Initial Setup
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    updateScrollUI();

    runCounters();

    showSlide(0);

});
