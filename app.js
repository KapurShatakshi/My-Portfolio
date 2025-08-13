// Enhanced Google Labs Portfolio with Modern Effects - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Enhanced Portfolio Loading...');
    
    // Initialize loading screen first
    initializeLoadingScreen();
    
    // Initialize core functionality after a delay
    setTimeout(() => {
        initializeCore();
    }, 3500);
});

function initializeCore() {
    try {
        // Initialize particle system
        initializeParticleSystem();
        
        // Initialize mouse trail
        initializeMouseTrail();
        
        // Theme Switcher functionality
        initializeThemeSwitcher();
        
        // Navigation functionality
        initializeNavigation();
        
        // Show more/less functionality
        initializeShowMore();
        
        // Enhanced scroll effects and animations
        initializeEnhancedScrollEffects();
        
        // Advanced interactive animations
        initializeAdvancedAnimations();
        
        // Initialize intersection observer
        initializeIntersectionObserver();
        
        // Initialize advanced interactions
        initializeAdvancedInteractions();
        
        console.log('✨ Portfolio core functionality loaded!');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
}

// Enhanced Loading Screen with Typewriter Effect
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingName = document.getElementById('loading-name');
    const fullName = 'Shatakshi Kapur';
    
    if (!loadingScreen || !loadingName) return;
    
    // Typewriter effect for name
    function typeWriter(text, element, speed = 120) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Start fading out loading screen after typing is complete
                setTimeout(() => {
                    fadeOutLoadingScreen();
                }, 800);
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 500);
    }
    
    function fadeOutLoadingScreen() {
        loadingScreen.classList.add('fade-out');
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
            // Trigger entrance animations for main content
            triggerMainContentAnimations();
        }, 800);
    }
    
    function triggerMainContentAnimations() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.animation = 'fadeInUp 1s ease forwards';
        }
        
        // Start intersection observer animations
        startScrollAnimations();
    }
    
    // Start typewriter effect
    typeWriter(fullName, loadingName);
    
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
}

// Simplified Particle System
function initializeParticleSystem() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Simple particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(26, 115, 232, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    function createParticles() {
        particles = [];
        const particleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 20000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Initialize
    resizeCanvas();
    createParticles();
    animate();
    
    // Handle resize
    window.addEventListener('resize', debounce(() => {
        resizeCanvas();
        createParticles();
    }, 250));
}

// Enhanced Mouse Trail Effect
function initializeMouseTrail() {
    const trail = document.getElementById('mouse-trail');
    if (!trail) return;
    
    document.addEventListener('mousemove', (e) => {
        trail.style.opacity = '0.6';
        trail.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px) scale(1)`;
    });
    
    document.addEventListener('mouseleave', () => {
        trail.style.opacity = '0';
    });
}

// Fixed Theme Switcher
function initializeThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    const html = document.documentElement;
    
    if (!themeToggle || !themeMenu) {
        console.warn('Theme switcher elements not found');
        return;
    }
    
    let currentTheme = html.getAttribute('data-theme') || 'google-classic';
    updateActiveTheme(currentTheme);
    
    // Theme toggle with proper event handling
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Theme toggle clicked');
        themeMenu.classList.toggle('hidden');
    });
    
    // Close theme menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!themeMenu.contains(e.target) && !themeToggle.contains(e.target)) {
            themeMenu.classList.add('hidden');
        }
    });
    
    // Theme option selection
    themeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const selectedTheme = this.getAttribute('data-theme');
            console.log('Switching to theme:', selectedTheme);
            
            switchTheme(selectedTheme);
            updateActiveTheme(selectedTheme);
            themeMenu.classList.add('hidden');
        });
    });
    
    function switchTheme(theme) {
        html.setAttribute('data-theme', theme);
        currentTheme = theme;
        
        // Add smooth transition
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    function updateActiveTheme(theme) {
        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            }
        });
    }
}

// Fixed Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }

    // Enhanced navbar background on scroll
    if (navbar) {
        window.addEventListener('scroll', debounce(function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = 'none';
            }
        }, 10));
    }

    // Fixed smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', debounce(updateActiveNavLink, 50));
}

// Show More/Less functionality
function initializeShowMore() {
    setupShowMore('projects', '.project-card', 4);
    setupShowMore('certificates', '.cert-card', 4);
    
    function setupShowMore(sectionId, itemSelector, showCount) {
        const container = document.getElementById(`${sectionId}-grid`);
        const showMoreBtn = document.getElementById(`${sectionId}-show-more`);
        
        if (!container || !showMoreBtn) return;
        
        const items = container.querySelectorAll(itemSelector);
        let isExpanded = false;
        
        // Hide items beyond showCount initially
        items.forEach((item, index) => {
            if (index >= showCount) {
                item.classList.add('hidden');
            }
        });
        
        showMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                // Show hidden items
                const hiddenItems = Array.from(items).slice(showCount);
                hiddenItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 100);
                });
                
                showMoreBtn.textContent = 'Show Less';
            } else {
                // Hide items
                const itemsToHide = Array.from(items).slice(showCount);
                itemsToHide.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            item.classList.add('hidden');
                            item.style.opacity = '';
                            item.style.transform = '';
                        }, 300);
                    }, index * 50);
                });
                
                showMoreBtn.textContent = 'Show More';
            }
        });
    }
}

// Enhanced scroll effects and animations
function initializeEnhancedScrollEffects() {
    // Initialize intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe fade-in elements
    document.querySelectorAll('.fade-in-element').forEach(element => {
        observer.observe(element);
    });

    // Counter animations
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.animated-counter');
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe counter elements
    document.querySelectorAll('.hero-stats, .platform-stats').forEach(element => {
        counterObserver.observe(element);
    });

    // Skill bar animations
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFills = entry.target.querySelectorAll('.animated-progress');
                skillFills.forEach((fill, index) => {
                    setTimeout(() => {
                        const targetWidth = fill.getAttribute('data-width');
                        fill.style.width = targetWidth;
                    }, index * 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Observe skill bars
    document.querySelectorAll('.skill-bars').forEach(element => {
        skillObserver.observe(element);
    });
}

function startScrollAnimations() {
    // Trigger initial animations for hero section
    const heroElements = document.querySelectorAll('.hero .fade-in-element, .hero .floating-element');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });
}

// Counter animation function
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeOutCubic;
        
        if (target < 10) {
            element.textContent = current.toFixed(2);
        } else {
            element.textContent = Math.floor(current);
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Initialize intersection observer
function initializeIntersectionObserver() {
    // This is handled in initializeEnhancedScrollEffects
}

// Advanced interactive animations
function initializeAdvancedAnimations() {
    // Enhanced hover effects
    addEnhancedHoverEffects();
    
    // Ripple effect for buttons
    addRippleEffect();
    
    // Scroll to top button
    addScrollToTop();
}

function addEnhancedHoverEffects() {
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Certificate cards
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function addRippleEffect() {
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        const rect = button.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 24px;
        width: 48px;
        height: 48px;
        background: var(--theme-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    }, 16));

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Advanced interactions
function initializeAdvancedInteractions() {
    // Framework tags
    const frameworkTags = document.querySelectorAll('.morphing-tag');
    frameworkTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.transition = 'all 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tech items
    const techItems = document.querySelectorAll('.floating-tech');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Resume download functionality
window.downloadResume = function() {
    const btn = event.target;
    const originalText = btn.textContent;
    
    btn.style.transform = 'scale(0.95)';
    btn.textContent = 'Preparing...';
    
    setTimeout(() => {
        btn.style.transform = '';
        btn.textContent = originalText;
        showNotification('Resume download will be available soon! Please contact me directly for now.', 'info');
        
        setTimeout(() => {
            showContactModal();
        }, 1000);
    }, 1500);
};

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'info' ? 'ℹ️' : '✅'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 24px;
                background: var(--theme-background);
                border: 1px solid var(--theme-border);
                border-radius: 8px;
                padding: 16px 20px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                z-index: 10000;
                max-width: 400px;
                opacity: 0;
                transform: translateX(100px);
                transition: all 0.3s ease;
                color: var(--theme-text);
            }
            
            .notification--info {
                border-left: 4px solid var(--theme-primary);
            }
            
            .notification.show {
                opacity: 1;
                transform: translateX(0);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-icon {
                font-size: 20px;
            }
            
            .notification-message {
                font-size: 14px;
                line-height: 1.4;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Contact modal
function showContactModal() {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeContactModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Get My Resume</h3>
                <button onclick="closeContactModal()" class="modal-close" aria-label="Close modal">×</button>
            </div>
            <div class="modal-body">
                <p>I'd love to share my resume with you! Please reach out through any of these channels:</p>
                <div class="contact-options">
                    <a href="mailto:contact@shatakshikapur.com" class="contact-option">
                        <span class="contact-icon">📧</span>
                        <div>
                            <strong>Email</strong>
                            <small>contact@shatakshikapur.com</small>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/shatakshi-kapur-6b9a5025b/" target="_blank" rel="noopener noreferrer" class="contact-option">
                        <span class="contact-icon">💼</span>
                        <div>
                            <strong>LinkedIn</strong>
                            <small>Professional Profile</small>
                        </div>
                    </a>
                </div>
                <p><small>I typically respond within 24 hours!</small></p>
            </div>
        </div>
    `;
    
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .contact-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .contact-modal.show {
                opacity: 1;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                background: var(--theme-background);
                border-radius: 12px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                max-width: 500px;
                width: 90%;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .contact-modal.show .modal-content {
                transform: scale(1);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 24px;
                border-bottom: 1px solid var(--theme-border);
            }
            
            .modal-header h3 {
                margin: 0;
                color: var(--theme-primary);
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--theme-text-secondary);
                transition: color 0.2s ease;
            }
            
            .modal-close:hover {
                color: var(--theme-text);
            }
            
            .modal-body {
                padding: 24px;
            }
            
            .contact-options {
                display: grid;
                gap: 16px;
                margin: 24px 0;
            }
            
            .contact-option {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 16px;
                background: var(--theme-surface);
                border-radius: 8px;
                text-decoration: none;
                color: var(--theme-text);
                transition: all 0.2s ease;
            }
            
            .contact-option:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            
            .contact-icon {
                font-size: 24px;
            }
            
            .contact-option strong {
                color: var(--theme-primary);
                display: block;
            }
            
            .contact-option small {
                color: var(--theme-text-secondary);
                font-size: 12px;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => modal.classList.add('show'), 100);
    window.currentModal = modal;
}

window.closeContactModal = function() {
    const modal = window.currentModal;
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            modal.remove();
            window.currentModal = null;
        }, 300);
    }
};

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add the missing ripple styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🎉 Enhanced Google Labs Portfolio JavaScript loaded successfully!');