console.log('Im connected');


$(document).ready(() => {
  

// toggle class for Hamburger


		$('#hamburgerMenu').click(function() {

			$('.mobile_dropdown').toggle(500);

		});



// Would like to convert to a slideToggle but cant get it to work

// $( "#clickme" ).click(function() {
//   $( "#book" ).slideToggle( "slow", function() {
//     // Animation complete.
//   });
// });

// 	$('#hamburgerMenu').on('click', () => {
// 		$('.mobile_dropdown').show();
// 	});


// 	$('#hamburgerMenu').on('click', () => {

// 		$('.mobile_dropdown').hide();



// **************************PANORMA SCROLL****************************** //
// ********************************************************************** //








// **************************BOOK A SESSION PAGE************************* //
// ********************************************************************** //

// MIXING ICON

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

	  // $('#sumbitBttn').on('click', () => {
	  // 	$('hidden').show('fast');

	  // })


	// $('#sumbitBttn').click(function(){
	// 	$('#resContact', '.hidden').toggle(300);

































		// $soundboard_active = $('<img>');
		// $soundboard_active.attr('src', './images/atomisound_icons_soundboard_select.svg');
		// $soundboard_active.appendTo('.mixing');
		
	



	// $('.soundboard_active').click(function(){
	// 	$('soundboard_static').toggle(650);


	



		// $( '.soundboard_static').hover(
		//   function() {
		//     $( this ).append( $( "<svg></svg>" ) );
		//   }, function() {
		//     $( this ).find( "span:last" ).remove();
		//   }
		// );
		 
		// $( "li.fade" ).hover(function() {
		//   $( this ).fadeOut( 100 );
		//   $( this ).fadeIn( 500 );
		// });

	
		// function swapImage(){
		// var soundboard_static = $('.soundboard_static');
		// $soundboard_static.hover.append()


		// };
		



	

});





