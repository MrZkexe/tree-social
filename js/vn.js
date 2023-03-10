setTimeout(() => {
	console.log('cuzinho');

	VanillaTilt.init(document.querySelectorAll("[id='r-box']"), {
		max: 25,
		speed: 1000,
		glare: true,
		"max-glare": 0.2,
		reverse: true,
		scale: 1.2,
	});
}, 500);

