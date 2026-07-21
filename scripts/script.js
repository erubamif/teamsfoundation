// ======================================
// T.E.A.M.S Initiative Website
// script.js
// ======================================

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const impactSection = document.querySelector(".impact");

    const sectionTop = impactSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 150;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target.toLocaleString() + "+";

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

// ================================
// NAVBAR SHADOW
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.08)";

    }

});

// ================================
// FADE-IN ANIMATION
// ================================

const animatedItems = document.querySelectorAll(
    ".about-card, .card, .testimonial, .story-content, .mentor-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

animatedItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .8s ease";

    observer.observe(item);

});

// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// HERO TEXT ANIMATION
// ================================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";
    heroContent.style.transition = "all 1s ease";

    setTimeout(() => {

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 300);

});

// ======================================
// END OF FILE
// ======================================