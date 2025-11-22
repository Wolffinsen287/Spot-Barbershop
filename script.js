// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Mobile menu close functionality is now integrated in smooth scroll function above

// Enhanced smooth scrolling for all links and buttons with anchor targets
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        return true;
    }
    return false;
}

// Apply smooth scrolling to ALL links and buttons with hash anchors
function setupSmoothScrolling() {
    // Get all elements that could trigger smooth scroll
    const scrollTriggers = document.querySelectorAll('a[href^="#"], button[href^="#"], [data-scroll]');
    
    scrollTriggers.forEach(element => {
        element.addEventListener('click', function (e) {
            const href = this.getAttribute('href') || this.getAttribute('data-scroll');
            
            // Only prevent default and smooth scroll if it's a valid anchor
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
                }
                
                smoothScrollTo(href);
            }
        });
    });
}

// Initialize smooth scrolling
setupSmoothScrolling();

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature, .location-card, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => item.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Gallery Lightbox Functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    let currentIndex = 0;
    const images = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt
            });

            // Add click event to open lightbox
            item.addEventListener('click', () => {
                currentIndex = index;
                openLightbox();
            });
        }
    });

    function openLightbox() {
        if (images.length > 0) {
            lightbox.classList.add('active');
            updateLightboxImage();
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function updateLightboxImage() {
        lightboxImg.src = images[currentIndex].src;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    });
}

// Initialize gallery
initGallery();

// Preload critical resources
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS class for active navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-gold);
    }
    .nav-links a.active::after {
        width: 100%;
    }
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

console.log('The Spot Barbershop - Website loaded successfully');
