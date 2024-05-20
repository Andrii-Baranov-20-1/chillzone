document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-menu');
    const navList = document.querySelector('.header-menu-list');

    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });
    /*--- index.html ---*/
    sr.reveal('.section-menu', { delay: 200, origin: 'top', reset: false });
    sr.reveal('.first-button', { delay: 300, origin: 'bottom', reset: false });
    sr.reveal('.second-menu-text', { delay: 200, origin: 'bottom', reset: false });
    /*--- about.html ---*/
    sr.reveal('.info-left h1', { delay: 200, origin: 'top', reset: false });
    sr.reveal('.info-left p', { delay: 300, origin: 'bottom', reset: false });
    sr.reveal('.info-right h1', { delay: 200, origin: 'top', reset: false });
    sr.reveal('.info-right p', { delay: 300, origin: 'bottom', reset: false });

    sr.reveal('.testimonials h2', { delay: 200, origin: 'top', reset: false });
    sr.reveal('.testimonial p', { delay: 600, origin: 'bottom', reset: false });

});
