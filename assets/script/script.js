// A $( document ).ready() block.
$( document ).ready(function() {

	// ==== Data AOS init ====
	AOS.init({
      disable: 'mobile',
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100, 
    });


	// ==== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 300px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});



}); // end document ready