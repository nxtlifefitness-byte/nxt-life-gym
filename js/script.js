// NXT LIFE Fitness Website JavaScript - Enhanced Version

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initMobileMenu();
    initSmoothScrolling();
    initContactForm();
    initAnimations();
    initTestimonialSlider();
    initScrollAnimations();
    initHeroSlider();
    initPricingButtons();
    initVideoHandling();
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenu.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
        
        // Close mobile menu when clicking on nav links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                // Reset hamburger menu
                const spans = mobileMenu.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
}

// Hero Slider functionality - Enhanced
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Hero slide content data
    const slideContent = [
        {
            tagline: "FITNESS LIFE",
            title: "THE BEST FITNESS CENTER IN KIRIBATHGODA",
            description: "Transform your body with professional weight training, fitness training, cardio, CrossFit, aerobics, and expert diet consultancy at Kiribathgoda's premier 5-star rated gym."
        },
        {
            tagline: "TRANSFORM TODAY",
            title: "STATE-OF-THE-ART EQUIPMENT & FACILITIES",
            description: "Experience modern fitness with our fully air-conditioned gym, latest equipment, and professional trainers dedicated to your success."
        },
        {
            tagline: "EXPERT GUIDANCE",
            title: "CERTIFIED PROFESSIONAL TRAINERS",
            description: "Train with confidence under the guidance of certified bodybuilding and fitness professionals who understand your fitness journey."
        },
        {
            tagline: "COMMUNITY FITNESS",
            title: "JOIN OUR FITNESS FAMILY TODAY",
            description: "Become part of Kiribathgoda's most motivating fitness community with flexible membership plans and diverse class options."
        },
        {
            tagline: "ACHIEVE MORE",
            title: "YOUR FITNESS GOALS AWAIT",
            description: "From weight loss to muscle building, cardio to strength training - discover your potential at NXT LIFE Fitness Centre."
        }
    ];
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        
        // Update content with fade effect
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && slideContent[index]) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                const tagline = heroContent.querySelector('.hero-tagline');
                const title = heroContent.querySelector('h1');
                const description = heroContent.querySelector('p');
                
                if (tagline) tagline.textContent = slideContent[index].tagline;
                if (title) title.textContent = slideContent[index].title;
                if (description) description.textContent = slideContent[index].description;
                
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Auto-advance slides every 6 seconds
    setInterval(nextSlide, 6000);
    
    // Initialize first slide
    showSlide(0);
}

// Video handling for background videos
function initVideoHandling() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Ensure videos play properly
        video.addEventListener('loadedmetadata', function() {
            this.currentTime = 0;
        });
        
        // Handle video errors gracefully
        video.addEventListener('error', function() {
            console.log('Video failed to load:', this.src);
            // Hide video container if video fails
            const container = this.closest('.hero-slide, .about-video-bg, .services-video-bg, .testimonials-video-bg');
            if (container) {
                container.style.display = 'none';
            }
        });
        
        // Optimize video playback
        video.addEventListener('canplay', function() {
            this.play().catch(e => {
                console.log('Video autoplay prevented:', e);
            });
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !phone || !service || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = createWhatsAppMessage(name, email, phone, service, message);
            
            // Send to WhatsApp
            sendToWhatsApp(whatsappMessage);
            
            // Show success message
            showNotification('Message sent successfully! Redirecting to WhatsApp...', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Pricing buttons WhatsApp integration
function initPricingButtons() {
    const planButtons = document.querySelectorAll('.choose-plan-btn');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const planName = this.getAttribute('data-plan');
            const whatsappMessage = createPricingWhatsAppMessage(planName);
            
            // Send to WhatsApp
            sendToWhatsApp(whatsappMessage);
            
            // Show notification
            showNotification(`Redirecting to WhatsApp for ${planName}...`, 'success');
        });
    });
}

// Create WhatsApp message for contact form
function createWhatsAppMessage(name, email, phone, service, message) {
    const whatsappMessage = `
🏋️‍♂️ *New Inquiry - NXT LIFE Fitness*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏃 *Service:* ${service}

💬 *Message:*
${message}

---
*Sent from NXT LIFE Fitness Website*
    `.trim();
    
    return encodeURIComponent(whatsappMessage);
}

// Create WhatsApp message for pricing plans
function createPricingWhatsAppMessage(planName) {
    const whatsappMessage = `
🏋️‍♂️ *Membership Inquiry - NXT LIFE Fitness*

📋 *Interested Plan:* ${planName}

Hi! I'm interested in the ${planName} at NXT LIFE Fitness Centre. Could you please provide more details about:

• Membership benefits and features
• Available time slots
• Registration process
• Payment options
• Any current promotions

I would like to schedule a visit to your facility.

Thank you!

---
*Sent from NXT LIFE Fitness Website*
    `.trim();
    
    return encodeURIComponent(whatsappMessage);
}

// Send message to WhatsApp
function sendToWhatsApp(message) {
    const whatsappNumber = '94777032483'; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new window
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 1500);
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll(
        '.service-card, .pricing-card, .contact-item, .feature-item, .about-text, .about-images, .services-card, .facility-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations dynamically
function initAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .service-card,
        .pricing-card,
        .contact-item,
        .feature-item,
        .about-text,
        .about-images,
        .services-card,
        .facility-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate-in,
        .pricing-card.animate-in,
        .contact-item.animate-in,
        .feature-item.animate-in,
        .about-text.animate-in,
        .about-images.animate-in,
        .services-card.animate-in,
        .facility-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
}

// Testimonial slider functionality - Enhanced
function initTestimonialSlider() {
    const testimonials = [
        {
            name: "Chamaali Paranavithana",
            role: "Gym Member",
            rating: 5,
            text: "I had my first gym experience here, and it was excellent! Located in the center of town, it's easy to access. The gym is fully air-conditioned with all new equipment. They have both male and female trainers who are very supportive and friendly. It's a great place not just for beginners like me, but for everyone looking to stay fit and active. Highly recommended!",
            image: "images/client-1.jpg"
        },
        {
            name: "Sanduni Gunathilaka",
            role: "Fitness Enthusiast",
            rating: 5,
            text: "Best gym ever. I'm forever thankful, and there are no words to truly thanks. This place is not only inspiring, but it also feels so safe and secure. I recommend this gym with all my heart! ❤️❤️❤️",
            image: "images/client-2.jpg"
        },
        {
            name: "Ramish Perea",
            role: "Regular Member",
            rating: 5,
            text: "Well equipped and clean fitness center to all users. Trainer is friendly and knowledgeable of the subject. Mr.kasun is the owner of the NXT Life Fitness. Happy to train here.",
            image: "images/client-3.jpg"
        },
        {
            name: "LAKI ARTS",
            role: "Gym Member",
            rating: 5,
            text: "Best gym in Kiribathgoda! The facilities are excellent and the trainers are very professional. Great atmosphere and modern equipment.",
            image: "images/client-4.jpg"
        },
        {
            name: "Avishka Yohan",
            role: "Fitness Member",
            rating: 5,
            text: "I've had an amazing experience at NXT Life Fitness Center. The gym is well-equipped with modern machines, clean facilities, and a motivating atmosphere. What makes it truly stand out is the guidance of Coach Mr. Sachin. He is highly professional and dedicated to helping members achieve their fitness goals.",
            image: "images/client-5.jpg"
        }
    ];
    
    let currentTestimonial = 0;
    
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1;
            updateTestimonial();
        });
        
        nextBtn.addEventListener('click', () => {
            currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
            updateTestimonial();
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
            updateTestimonial();
        }, 7000);
    }
    
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        const testimonialCard = document.querySelector('.testimonial-card');
        
        if (testimonialCard) {
            testimonialCard.style.opacity = '0';
            testimonialCard.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                testimonialCard.innerHTML = `
                    <div class="testimonial-header">
                        <div class="client-info">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="client-avatar">
                            <div class="client-details">
                                <h4>${testimonial.name}</h4>
                                <span class="client-role">${testimonial.role}</span>
                                <div class="rating">
                                    ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                `;
                
                testimonialCard.style.opacity = '1';
                testimonialCard.style.transform = 'translateY(0)';
            }, 300);
        }
    }
    
    // Initialize first testimonial
    updateTestimonial();
}

// Pricing card hover effects
function initPricingEffects() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Error handling for missing images
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder or fallback image
            if (this.classList.contains('client-avatar')) {
                this.src = 'images/default-avatar.jpg';
            } else if (this.classList.contains('logo-img')) {
                this.style.display = 'none';
            } else {
                this.style.opacity = '0.3';
            }
            console.log(`Image failed to load: ${this.src}`);
        });
        
        // Add loading effect
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

// Social media tracking
function trackSocialClick(platform) {
    console.log(`User clicked on ${platform} link`);
    // You can add analytics tracking here if needed
}

// Add social tracking to links
function initSocialTracking() {
    const socialLinks = document.querySelectorAll('.social-icons a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            if (href.includes('facebook')) trackSocialClick('Facebook');
            if (href.includes('instagram')) trackSocialClick('Instagram');
            if (href.includes('tiktok')) trackSocialClick('TikTok');
            if (href.includes('whatsapp')) trackSocialClick('WhatsApp');
        });
    });
}

// Scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-red);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'scale(1)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'scale(0.8)';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Performance optimization for videos
function optimizeVideoPerformance() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Reduce video quality on mobile
        if (window.innerWidth < 768) {
            video.style.transform = 'scale(1.2)';
        }
        
        // Pause videos when not in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(console.log);
                } else {
                    entry.target.pause();
                }
            });
        });
        
        observer.observe(video);
    });
}

// Form validation enhancement
function enhanceFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearValidationError(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Add error styling
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
        .error {
            border-color: #dc3545 !important;
            background-color: rgba(220, 53, 69, 0.1) !important;
        }
    `;
    if (!document.querySelector('#error-styles')) {
        errorStyle.id = 'error-styles';
        document.head.appendChild(errorStyle);
    }
}

function clearValidationError(field) {
    field.classList.remove('error');
}

// Loading animation for buttons
function addButtonLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
    }, 2000);
}

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
    initPricingEffects();
    handleImageErrors();
    initSocialTracking();
    addScrollToTop();
    optimizeVideoPerformance();
    enhanceFormValidation();
});

// Window resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate hero slider dimensions
    const heroSlides = document.querySelectorAll('.hero-slide');
    heroSlides.forEach(slide => {
        if (slide.classList.contains('active')) {
            // Force recalculation of video positioning
            const video = slide.querySelector('video');
            if (video) {
                video.style.minWidth = '100%';
                video.style.minHeight = '100%';
            }
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.getElementById('nav-links');
        const mobileMenu = document.getElementById('mobile-menu');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }
    
    // Arrow keys for hero slider
    if (e.key === 'ArrowLeft') {
        const prevBtn = document.querySelector('.slider-btn.prev');
        if (prevBtn) prevBtn.click();
    }
    if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('.slider-btn.next');
        if (nextBtn) nextBtn.click();
    }
});

// Intersection Observer for lazy loading
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);
