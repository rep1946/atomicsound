console.log('Im connected');


$(document).ready(() => {
  

// toggle class for Hamburger


		$('#hamburgerMenu').click(function() {

			$('.mobile_dropdown').slideToggle(500);

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
var imagePos = document.querySelector('#panoimage');
var panContainer = document.querySelector('#studioPan');



// $( ".panorama" ).mousemove(function( event ) {
// 	// var x = event.screenX;
// 	// var y = event.screenY;
// 		  // var msg = "Handler for .mousemove() called at ";
// 		  // msg += event.pageX + ", " + event.pageY;
// 		$('#pano_image').css('backgroundPosition', function(e));
// });

		panContainer.addEventListener('mousemove', getMousePosition, false);
		// document.getElementById('overlayHome').style.backgroundColor = rgba(45, 44, 45, .2);



		function getMousePosition(e) {
			var panContainerPosition = getPosition(panContainer);
			var x = e.clientX - panContainerPosition.x -(imagePos.offsetWidth /2);
			var y = e.clientY - panContainerPosition.y -(imagePos.offsetHeight /2);



			// imagePos.style.backgroundPosition = x + "px";
			// imagePos.style.backgroundPosition = y + "px";

			// var changeBgPosition = "backgroundPosition(" + x + "px," + y + "px, 0)";
			// imagePos.style.backgroundPosition = changeBgPosition;

		var translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
		imagePos.style.transform = translate3dValue;




				  
			// $imagePos.animate('backgroundPosition', x, y);

			  console.log(e)


			  

			  return false;
			  

		}













		


// Take in to account browser padding, scroll bars, from Kirupa
// https://www.kirupa.com/snippets/move_element_to_click_position.htm

function getPosition(el) {
	  var xPos = 0;
	  var yPos = 0;
	 
	  while (el) {
	    if (el.tagName == "BODY") {
	      // deal with browser quirks with body/window/document and page scroll
	      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
	      var yScroll = el.scrollTop || document.documentElement.scrollTop;
	 
	      xPos += (el.offsetLeft - xScroll + el.clientLeft);
	      yPos += (el.offsetTop - yScroll + el.clientTop);
	    } else {
	      // for all other non-BODY elements
	      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
	      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
	    }
	 
	    el = el.offsetParent;
	  }
	  return {
	    x: xPos,
	    y: yPos
	  };

	  return false
	}



// Open About us on click






	var enterAbout = document.querySelector('.enterBttn');
	enterAbout.addEventListener('click', newWindow);
			function newWindow() {
			  	var newWindow = window.open("./about.html");
			  	alert( "clicked" );
			  	return false;
			 
		};




































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
				function waitForMouseStop(callback) {
			    var timer;

			    function stoppedMoving(evt) {
			        document.onmousemove = null;
			        callback();
			    }

			    function moveHandler(evt) {
			        evt = evt || window.event;
			        if (timer) {
			            window.clearTimeout(timer);
			        }
			        timer = window.setTimeout(function() {
			            stoppedMoving(evt);
			        }, 450);
			    }

			    document.onmousemove = moveHandler;
			}

			waitForMouseStop(function() {
			    alert("Stopped");
				document.getElementById('overlayHome').style.backgroundColor = 'rgba(45, 44, 45, .8)';

			});






	

});





