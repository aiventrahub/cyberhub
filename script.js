/* ==========================================================
   CyberHub Bangladesh V3
   script.js
   Part 1
   ========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       Elements
    ====================================================== */

    const loader = document.getElementById("loader");

    const header = document.getElementById("header");

    const progressBar = document.getElementById("progressBar");

    const backToTop = document.getElementById("backToTop");

    const menuToggle = document.getElementById("menuToggle");

    const closeMenu = document.getElementById("closeMenu");

    const mobileMenu = document.getElementById("mobileMenu");

    const mobileLinks = document.querySelectorAll("#mobileMenu a");

    const cursorDot = document.querySelector(".cursor-dot");

    const cursorRing = document.querySelector(".cursor-ring");

    const faqItems = document.querySelectorAll(".faq-item");

    /* ======================================================
       Loader
    ====================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 700);

    });

    /* ======================================================
       Header + Scroll Progress + Back To Top
    ====================================================== */

    function updateScrollUI() {

        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

        if (scrollTop > 50) {

            header.style.background =
                "rgba(5,10,20,.82)";

            header.style.backdropFilter =
                "blur(20px)";

            header.style.boxShadow =
                "0 12px 35px rgba(0,0,0,.25)";

        } else {

            header.style.background =
                "rgba(8,13,25,.35)";

            header.style.boxShadow = "none";

        }

        if (scrollTop > 450) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    updateScrollUI();

    window.addEventListener(
        "scroll",
        updateScrollUI
    );

    /* ======================================================
       Back To Top
    ====================================================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================================
       Mobile Menu
    ====================================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            mobileMenu.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }

    if (closeMenu) {

        closeMenu.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    }

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    });

    /* ======================================================
       Close Menu Outside Click
    ====================================================== */

    document.addEventListener("click", (event) => {

        if (
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* ======================================================
       Smooth Anchor Scroll
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                e.preventDefault();

                const offset = 80;

                const top =
                    target.offsetTop - offset;

                window.scrollTo({

                    top,

                    behavior: "smooth"

                });

            });

        });

});/* ==========================================================
   CyberHub Bangladesh V3
   script.js
   Part 2 (Final)
   Continue after Part 1
   ========================================================== */

    /* ======================================================
       FAQ Accordion
    ====================================================== */

    faqItems.forEach((item) => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            faqItems.forEach((faq) => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ======================================================
       Custom Cursor
    ====================================================== */

    if (
        cursorDot &&
        cursorRing &&
        window.innerWidth > 992
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;

        document.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left = mouseX + "px";
            cursorDot.style.top = mouseY + "px";

        });

        function animateCursor() {

            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            cursorRing.style.left = ringX + "px";
            cursorRing.style.top = ringY + "px";

            requestAnimationFrame(animateCursor);

        }

        animateCursor();

        const hoverTargets = document.querySelectorAll(
            "a,button,.service-card,.feature-box,.pricing-card,.faq-question"
        );

        hoverTargets.forEach((element) => {

            element.addEventListener("mouseenter", () => {

                cursorRing.style.transform =
                    "translate(-50%,-50%) scale(1.6)";

            });

            element.addEventListener("mouseleave", () => {

                cursorRing.style.transform =
                    "translate(-50%,-50%) scale(1)";

            });

        });

    } else {

        if (cursorDot) {

            cursorDot.style.display = "none";

        }

        if (cursorRing) {

            cursorRing.style.display = "none";

        }

    }

    /* ======================================================
       Scroll Reveal
    ====================================================== */

    const revealItems = document.querySelectorAll(

        ".section-title,.service-card,.feature-box,.pricing-card,.faq-item,.contact-box,.hero-content,.hero-visual"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealItems.forEach((item) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition =
            "all .8s ease";

        revealObserver.observe(item);

    });

    /* ======================================================
       Active Navigation
    ====================================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(

        ".nav-links a,#mobileMenu a"

    );

    function updateActiveNav() {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 140;

            const sectionHeight =
                section.offsetHeight;

            if (

                window.pageYOffset >= sectionTop &&
                window.pageYOffset <
                    sectionTop + sectionHeight

            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateActiveNav();

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    /* ======================================================
       Keyboard Accessibility
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (

            event.key === "Escape" &&
            mobileMenu.classList.contains("active")

        ) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* ======================================================
       Window Resize
    ====================================================== */

    window.addEventListener("resize", () => {

        if (

            window.innerWidth > 992 &&
            mobileMenu.classList.contains("active")

        ) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* ======================================================
       Console Message
    ====================================================== */

    console.log(
        "%cCyberHub Bangladesh V3",
        "color:#00e7ff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "Premium Cyber Security & IT Services Website Loaded Successfully."
    );

});

/* ==========================================================
   End of script.js
========================================================== */
