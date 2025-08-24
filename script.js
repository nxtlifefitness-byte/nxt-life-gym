// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const phone = this.querySelector('input[placeholder="Your Phone"]').value;
    const message = this.querySelector('textarea[placeholder="Your Message"]').value;
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const phoneNumber = '94773672564';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Thank you for your message! Redirecting to WhatsApp...');
    this.reset();
});

// Join Now button scroll to membership
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#membership').scrollIntoView({
        behavior: 'smooth'
    });
});

// WhatsApp integration for membership buttons
function sendWhatsAppMessage(membershipType, price) {
    const phoneNumber = '94773672564'; // Your WhatsApp number
    const message = `*Hi NXT Life Fitness!* 💪%0A%0AI'm interested in the *${membershipType} Membership* plan.%0A%0A💰 *Price:* ${price}%0A%0ACan you please provide more details about:%0A• Payment options%0A• What's included%0A• When can I start%0A%0AThank you!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Membership button clicks with WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const membershipBtns = document.querySelectorAll('.membership-btn');
    
    membershipBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            let membershipType, price;
            
            switch(index) {
                case 0:
                    membershipType = "Men's";
                    price = "Rs. 45,000/year (Best Value) + Rs. 2,000 admission";
                    break;
                case 1:
                    membershipType = "Ladies'";
                    price = "Rs. 40,000/year (Best Value) + Rs. 2,000 admission";
                    break;
                case 2:
                    membershipType = "Couple";
                    price = "Rs. 60,000/year (Best Value) + Rs. 2,000 admission";
                    break;
                case 3:
                    membershipType = "Family";
                    price = "Rs. 100,000/year (No admission fee)";
                    break;
            }
            
            sendWhatsAppMessage(membershipType, price);
        });
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .trainer-card, .membership-card, .owner-card, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add initial styles for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.service-card, .trainer-card, .membership-card, .owner-card, .contact-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Remove counter animation functions (no longer needed)

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Preload videos for better performance
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.preload = 'metadata';
    });
});

console.log('🎉 NXT Life Fitness website loaded successfully!');
console.log('💪 Ready to transform lives!');