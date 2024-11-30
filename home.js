// ANIMATION 
document.addEventListener("scroll", function() {
    const screenPosition = window.innerHeight / 1.3;

    const sectionsToAnimate = [
        { element: document.querySelector(".contact-section"), className: "show" },
        { element: document.querySelector(".abtus-section"), className: "show" },
        { element: document.querySelector(".offers-section"), className: "show" }
    ];

    sectionsToAnimate.forEach(section => {
        const sectionPosition = section.element.getBoundingClientRect().top;
        if (sectionPosition < screenPosition) {
            section.element.classList.add(section.className);
        }
    });
});

// Navbar 
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    let activeLink = null;

   
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

           
            if (activeLink) activeLink.classList.remove('active');
            this.classList.add('active');
            activeLink = this;
        });
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    sections.forEach(section => observer.observe(section));
});