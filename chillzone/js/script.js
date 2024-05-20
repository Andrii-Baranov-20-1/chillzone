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
	sr.reveal('.section-main-text', { delay: 200, origin: 'top' });
	sr.reveal('.section-button', { delay: 300, origin: 'bottom' });
	sr.reveal('.main-second-text', { delay: 200, origin: 'bottom' });
	/*--- about.html ---*/
	sr.reveal('.info-left h1', { delay: 200, origin: 'top' });
	sr.reveal('.info-left p', { delay: 300, origin: 'bottom' });
	sr.reveal('.info-right h1', { delay: 200, origin: 'top' });
	sr.reveal('.info-right p', { delay: 300, origin: 'bottom' });

	sr.reveal('.testimonials h2', { delay: 200, origin: 'top' });
	sr.reveal('.testimonial p', { delay: 600, origin: 'bottom' });

});
