"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Elements
    ========================== */

    const loader = document.getElementById("loader");
    const header = document.getElementById("header");
    const progressBar = document.getElementById("progressBar");
    const backToTop = document.getElementById("backToTop");

    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    const mobileLinks =
        document.querySelectorAll("#mobileMenu a");

    const faqItems =
        document.querySelectorAll(".faq-item");

    /* ==========================
       Loader
    ========================== */

    function hideLoader() {

        if (!loader) return;

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

    window.addEventListener("load", () => {

        setTimeout(hideLoader, 700);

    });

    /* ==========================
       Scroll UI
    ========================== */

    function updateScrollUI() {

        const scrollTop =
            window.pageYOffset;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        if (progressBar) {

            progressBar.style.width =
                progress + "%";

        }

        if (header) {

            if (scrollTop > 60) {

                header.style.background =
                    "rgba(6,12,22,.85)";

                header.style.backdropFilter =
                    "blur(20px)";

            } else {

                header.style.background =
                    "rgba(8,13,25,.35)";

            }

        }

        if (backToTop) {

            if (scrollTop > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

    }

    updateScrollUI();

    window.addEventListener(
        "scroll",
        updateScrollUI
    );
       /* ==========================
       Back To Top
    ========================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================
       Mobile Menu
    ========================== */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            mobileMenu.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }

    if (closeMenu && mobileMenu) {

        closeMenu.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    }

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    });

    /* ==========================
       Outside Click Close
    ========================== */

    document.addEventListener("click", (event) => {

        if (!mobileMenu) return;

        if (
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(event.target) &&
            menuToggle &&
            !menuToggle.contains(event.target)
        ) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });
       /* ==========================
       FAQ Accordion
    ========================== */

    faqItems.forEach((item) => {

        const button = item.querySelector(".faq-question");

        if (!button) return;

        button.addEventListener("click", () => {

            faqItems.forEach((faq) => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================
       Active Navigation
    ========================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a, #mobileMenu a"
        );

    function updateActiveMenu() {

        let current = "";

        sections.forEach((section) => {

            const top =
                section.offsetTop - 120;

            const height =
                section.offsetHeight;

            if (
                window.pageYOffset >= top &&
                window.pageYOffset < top + height
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    updateActiveMenu();

    window.addEventListener(
        "scroll",
        updateActiveMenu
    );

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealItems =
        document.querySelectorAll(

            ".section-title, .service-card, .feature-box, .pricing-card, .faq-item, .contact-box, .hero-content, .hero-visual"

        );

    const observer =
        new IntersectionObserver(

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

        item.style.transform =
            "translateY(40px)";

        item.style.transition =
            "all .8s ease";

        observer.observe(item);

    });
       /* ==========================
       FAQ Accordion
    ========================== */

    faqItems.forEach((item) => {

        const button = item.querySelector(".faq-question");

        if (!button) return;

        button.addEventListener("click", () => {

            faqItems.forEach((faq) => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================
       Active Navigation
    ========================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a, #mobileMenu a"
        );

    function updateActiveMenu() {

        let current = "";

        sections.forEach((section) => {

            const top =
                section.offsetTop - 120;

            const height =
                section.offsetHeight;

            if (
                window.pageYOffset >= top &&
                window.pageYOffset < top + height
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    updateActiveMenu();

    window.addEventListener(
        "scroll",
        updateActiveMenu
    );

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealItems =
        document.querySelectorAll(

            ".section-title, .service-card, .feature-box, .pricing-card, .faq-item, .contact-box, .hero-content, .hero-visual"

        );

    const observer =
        new IntersectionObserver(

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

        item.style.transform =
            "translateY(40px)";

        item.style.transition =
            "all .8s ease";

        observer.observe(item);

    });
