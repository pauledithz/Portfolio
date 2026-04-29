// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    if (menu.classList.contains('scale-y-0')) {
        // Open menu
        menu.classList.remove('scale-y-0', 'opacity-0');
        menu.classList.add('scale-y-100', 'opacity-100');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        // Close menu
        menu.classList.add('scale-y-0', 'opacity-0');
        menu.classList.remove('scale-y-100', 'opacity-100');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

btn.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Navbar blur on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-2');
    }
});

// Scroll Reveal Animation via Intersection Observer
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}

// Initialize reveal observer when DOM is loaded
document.addEventListener("DOMContentLoaded", reveal);
