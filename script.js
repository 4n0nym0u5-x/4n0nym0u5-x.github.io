document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const fadeElements = document.querySelectorAll(
    ".project-card, .skill-group, .stat, .contact-item"
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => {
    el.classList.add("fade-in");
    fadeObserver.observe(el);
});

const h1 = document.querySelector("h1");
const fullName = "David Adepoju";
let position = 0;

function type() {
    if (position < fullName.length) {
        h1.textContent = fullName.slice(0, position + 1);
        position++;
        setTimeout(type, 100);
    }
}

h1.textContent = "";
type();

const navToggle = document.querySelector(".nav-toggle");
const navLinksList = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinksList.classList.toggle("open");
});

// BONUS: close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinksList.classList.remove("open");
    });
});