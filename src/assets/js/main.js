
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader when page is fully loaded
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(function() {
                loader.style.display = 'none';
            }, 500);
        }
    }, 800);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Transform hamburger to X
            const bars = document.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                mainNav.style.display = 'block';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                mainNav.style.display = '';
            }
        });
    }

    // Parallax effect for benefits section
    const parallaxImage = document.querySelector('.parallax-image');
    if (parallaxImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const benefitsSection = document.querySelector('.benefits');
            const benefitsSectionTop = benefitsSection.offsetTop;
            const benefitsSectionHeight = benefitsSection.offsetHeight;
            
            if (scrollPosition > benefitsSectionTop - window.innerHeight && 
                scrollPosition < benefitsSectionTop + benefitsSectionHeight) {
                const translateY = (scrollPosition - benefitsSectionTop + window.innerHeight) * 0.05;
                parallaxImage.style.transform = `translateY(${translateY}px)`;
            }
        });
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    });

    // Animation on scroll
    const animateElements = document.querySelectorAll('[data-aos]');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    function handleScroll() {
        animateElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    // Run once on page load
    handleScroll();
    
    // Then on scroll
    window.addEventListener('scroll', handleScroll);
});

// Add fade-in animation to elements
function addFadeInClass() {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 200); // Staggered effect
    });
}

// Initialize AOS-like animations
function initAnimations() {
    const cards = document.querySelectorAll('[data-aos]');
    cards.forEach(card => {
        card.classList.add('aos-init');
        
        // Add delay if specified
        const delay = card.getAttribute('data-aos-delay');
        if (delay) {
            card.style.transitionDelay = `${delay}ms`;
        }
    });
}

window.onload = function() {
    initAnimations();
    addFadeInClass();
};
