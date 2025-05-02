//query
document.addEventListener('DOMContentLoaded', function() {
   
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    }
    
   
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });
    
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
   
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
       
        showSlide(currentSlide);
        
      
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = testimonialSlides.length - 1;
                }
                showSlide(currentSlide);
            });
        }
        
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentSlide++;
                if (currentSlide >= testimonialSlides.length) {
                    currentSlide = 0;
                }
                showSlide(currentSlide);
            });
        }
        
       
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        
        setInterval(function() {
            currentSlide++;
            if (currentSlide >= testimonialSlides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }, 5000);
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            testimonialSlides[index].classList.add('active');
            dots[index].classList.add('active');
        }
    }
    
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                
                filterBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                
               
                this.classList.add('active');
                
              
                const filterValue = this.getAttribute('data-filter');
                
               
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    
    const projectLinks = document.querySelectorAll('.view-project');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    if (projectLinks.length > 0) {
        projectLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('href');
                document.querySelector(modalId).style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = this.closest('.project-modal');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
        
        window.addEventListener('click', function(e) {
            modals.forEach(modal => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
    
    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            
            if (!name || !email || !subject || !message) {
                formMessage.textContent = 'Please fill in all fields';
                formMessage.className = 'form-message error';
                return;
            }
            
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address';
                formMessage.className = 'form-message error';
                return;
            }
            
         
            formMessage.textContent = 'Your message has been sent successfully!';
            formMessage.className = 'form-message success';
            
            
            contactForm.reset();
            
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-image, .about-text');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
   
    const elementsToAnimate = document.querySelectorAll('.skill-card, .project-card, .about-image, .about-text');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    
    window.addEventListener('scroll', animateOnScroll);
    
   
    window.addEventListener('load', animateOnScroll);
});
