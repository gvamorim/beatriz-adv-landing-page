// ==========================================
// SMOOTH SCROLL FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20; // Small offset for better visibility
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section:not(.hero):not(.hero-bridge)');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // ==========================================
    // BUTTON INTERACTIONS
    // ==========================================
    
    // Add ripple effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .choice-btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation styles
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .cta-button, .choice-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // ==========================================
    // SCROLL TO TOP ON LOGO/NAME CLICK
    // ==========================================
    
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        heroName.style.cursor = 'pointer';
        heroName.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ==========================================
    // LAZY LOAD OPTIMIZATION
    // ==========================================
    
    // Add loading states for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Visual feedback for external link clicks
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });
    
    // ==========================================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // ==========================================
    
    let scrollTimeout;
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add subtle header shadow on scroll (if needed in future)
            if (scrollTop > 100) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        }, 10);
    }, { passive: true });
    
    // ==========================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ==========================================
    
    // Improve keyboard navigation for choice buttons
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextButton = choiceButtons[index + 1] || choiceButtons[0];
                nextButton.focus();
            }
            
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevButton = choiceButtons[index - 1] || choiceButtons[choiceButtons.length - 1];
                prevButton.focus();
            }
        });
    });
    
    // ==========================================
    // ANALYTICS TRACKING (Ready for integration)
    // ==========================================
    
    // Track CTA button clicks
    const trackableButtons = document.querySelectorAll('.cta-button');
    trackableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            
            // Ready for Google Analytics or other tracking
            console.log('CTA Click:', {
                text: buttonText,
                section: section,
                timestamp: new Date().toISOString()
            });
            
            // Example: gtag('event', 'cta_click', { button_text: buttonText, section: section });
        });
    });
    
    // Track choice button clicks
    const choiceButtonsTracking = document.querySelectorAll('.choice-btn');
    choiceButtonsTracking.forEach(button => {
        button.addEventListener('click', function() {
            const choice = this.querySelector('.btn-text').textContent.trim();
            
            console.log('Choice Click:', {
                choice: choice,
                timestamp: new Date().toISOString()
            });
            
            // Example: gtag('event', 'choice_click', { choice: choice });
        });
    });
});
