// =============================
// CyberHub v3 JavaScript
// =============================

document.addEventListener("DOMContentLoaded", () => {

    // Loader
    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.classList.add("hide");
            }, 500);
        });
    }

    // Mobile Menu
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // Sticky Header
    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

    // FAQ
    document.querySelectorAll(".faq-item").forEach(item => {

        item.querySelector(".faq-question").addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

    // Counter
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const speed = Math.ceil(target / 80);

            if (count < target) {

                counter.innerText = count + speed;

                setTimeout(update, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

    // Scroll Reveal
    const reveal = document.querySelectorAll(

        ".card,.price-card,.feature-card,.review-card,.stat-box,.pay-card,.contact-box"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    reveal.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

});

// =============================
// Scroll To Top
// =============================

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

console.log("CyberHub Loaded Successfully");
