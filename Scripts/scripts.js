// @ts-ignore
$(document).ready(function() {
	// Add scrollspy to <body>
	// @ts-ignore
	$('body').scrollspy({ target: '.navbar', offset: 50 });

	// Add smooth scrolling on all links inside the navbar
	// @ts-ignore
	$('#menuitems a').on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			// @ts-ignore
			$('html, body').animate(
				{
					// @ts-ignore
					scrollTop: $(hash).offset().top,
				},
				800,
				function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

//transparent navbar
// @ts-ignore
$(window).scroll(function() {
	// @ts-ignore
	if ($('.navbar').offset().top > 50) {
		// @ts-ignore
		$('#custom-nav').addClass('affix');
		// @ts-ignore
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		// @ts-ignore
		$('#custom-nav').removeClass('affix');
		// @ts-ignore
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

// Closes responsive menu when a scroll trigger link is clicked
// @ts-ignore
$('.js-scroll-trigger').click(function() {
	// @ts-ignore
	$('.navbar-collapse').collapse('hide');
});

// Collapse Navbar
var navbarCollapse = function() {
	// @ts-ignore
	if ($('#mainNav').offset().top > 100) {
		// @ts-ignore
		$('#mainNav').addClass('navbar-shrink');
	} else {
		// @ts-ignore
		$('#mainNav').removeClass('navbar-shrink');
	}
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
// @ts-ignore
$(window).scroll(navbarCollapse);
