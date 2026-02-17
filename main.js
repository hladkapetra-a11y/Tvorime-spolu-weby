document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav');

    // Header Scroll Effect (Subtle scale/opacity)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.transform = 'translateY(-5px) scale(0.98)';
        } else {
            header.style.transform = 'translateY(0) scale(1)';
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal class to sections
    document.querySelectorAll('.section, .duo-card, .service-item, .process-step').forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Spotlight effect for cards
    document.querySelectorAll('.glass').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
