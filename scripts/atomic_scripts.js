console.log('Im connected');


$(document).ready(() => {
  

// toggle class for Hamburger





	
	// $('#hamburgerMenu').click(function() {

	// $('.mobile_dropdown').slideToggle(500);

	// });





// **************************BOOK A SESSION PAGE************************* //
// ********************************************************************** //

// MIXING ICON


	$('#mixing').hover(function(){
		$( '.servicesContainer' ).attr('src', './images/soundboard_select.svg');

	});



	// Swap out Mixing SVG on hover 

	$('.mixing').hover(function(){
		$( '.soundboard' ).attr('src', './images/soundboard_select.svg');

	});

	// revert on mouse leave
	$('.mixing').mouseleave(function(){
		$('.soundboard').attr('src', './images/soundboard_static.svg');
	});

	// select on mouse click

		$('.mixing').click(function(){
		$('.soundboard').attr('src', './images/soundboard_select.svg');
	});

	// $('.soundboard').appendTo('.mixing');


// MASTERING ICON

	// Swap out on hover

	$('.mastering').hover(function(){
		$('.soundwave').attr('src', './images/soundwave_select.svg');
	})



	 // revert on mouse leave
	$('.mastering').mouseleave(function(){
		$('.soundwave').attr('src', './images/soundwave_static.svg');
	});



// select on mouse click

		$('.mastering').click(function(){
		$('.soundwave').attr('src', './images/soundwave_select.svg');
	});



// RECORDING ICON

	//Hover

	$('.recording').hover(function(){
		$('.microphone').attr('src', './images/microphone_select.svg');

	});

	// Mouse leave
		$('.recording').mouseleave(function(){
		$('.microphone').attr('src', './images/microphone_static.svg');
	});



	$('.recording').click(function(){
		$('.microphone').attr('src', './images/microphone_select.svg');

	});


	// Toggle form on sumbit


	$('.submitBttn.shamrock').click(function() {
	  $('#resContact').show( 'fast' );
	  $('.submitBttn.shamrock').hide();
	});



	// Show modal on click


	$('.controlRoom').click(function() {
		var $modalOne = $('#modalOne');
		var $close = $('.close')
		$modalOne.fadeIn( "320", "linear" );


			$close.click(function(){
			$modalOne.fadeOut(300);

		});
	
	


	});


	$('.liveRoom').click(function(){
			var $modalTwo = $('#modalTwo')
			var $close = $('.close')
			$modalTwo.fadeIn( "320", "linear" );

			$close.click(function(){
			$modalTwo.fadeOut(300);
		});

	});
		








// -----------End of document ready---------------//
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//

});





