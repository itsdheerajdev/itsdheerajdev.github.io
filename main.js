document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass-nav', 'border-b', 'border-white/10');
            header.classList.remove('bg-transparent');
        } else {
            // Only remove if it's the home page and at the top
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                header.classList.remove('glass-nav', 'border-b', 'border-white/10');
            }
        }
    });

    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // 3. Web Developer Hero Text Slider
    const heroTexts = [
        "Full Stack Developer",
        ".NET Core Specialist",
        "API Architect",
        "Frontend Engineer",
        "AI Enthusiast"
    ];
    let currentIndex = 0;
    const sliderElement = document.getElementById('hero-slider-text');

    if (sliderElement) {
        setInterval(() => {
            sliderElement.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % heroTexts.length;
                sliderElement.textContent = heroTexts[currentIndex];
                sliderElement.style.opacity = '1';
            }, 500);
        }, 3000);
    }

    // 4. Contact Form Submission (Mock)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Your message has been sent successfully.');
            contactForm.reset();
        });
    }

    // 5. Active Link Highlight
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('text-primary');
        }
    });
});
