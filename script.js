
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

const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');

document.querySelectorAll('.project img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalCaption.textContent = img.alt;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

projects.forEach(project => observer.observe(project));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.project img');
let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
});

 