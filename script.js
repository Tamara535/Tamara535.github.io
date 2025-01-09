
const greeting = document.getElementById("greeting");
const now = new Date();
const hour = now.getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener("scroll", () => {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollIndicator.style.width = `${progress}%`;
});
const animatedElements = document.querySelectorAll('.animate');

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * currentSlide}%)`;
    });
    currentSlide = (currentSlide + 1) % slides.length;
}, 3000);

const scrollArrow = document.getElementById("scroll-arrow");
const sections = document.querySelectorAll("section");

scrollArrow.addEventListener("click", () => {
    const currentScroll = window.scrollY;
    const nextSection = Array.from(sections).find(
        section => section.offsetTop > currentScroll
    );

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
    
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
window.addEventListener("scroll", () => {
    const scrollArrow = document.getElementById("scroll-arrow");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollArrow.style.display = "none";
    } else {
        scrollArrow.style.display = "flex";
    }
});

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

