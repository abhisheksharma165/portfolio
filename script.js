// Mobile Menu
const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
    nav.classList.toggle("active");
};

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });
});

// Typing Effect
const text = [
    "Full Stack Developer",
    "Frontend Developer",
    "UI Designer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const role = document.querySelector(".hero-text h2");

function typing() {

    current = text[i];

    if (!isDeleting) {
        role.textContent = current.substring(0, j++);
    } else {
        role.textContent = current.substring(0, j--);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(typing, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(typing, isDeleting ? 60 : 120);
}

typing();

// Contact Form
document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Your message has been sent.");

    this.reset();

});