$(document).ready(function() { url: 'https://www.vukpetrovic.com/js/main.js';
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		var $form = $(this);
		var $a = $(this).children('input');
		for(var i=0; i < $a.length; i++) {
			if($a.eq(i).val() === "") {
				alert('Some fields are empty, please complete all fields.');
				return false;
			}
		}

		var data = $(this).serialize();

		$form.append('<span id="mail-msg" style="color:orange; font-weight: bold;">Message is being sent...</span>');

		$.ajax({
			type: 'post',
			url: './sendmail.php',
			data: {data: data},
			success: function(s) {
				if(s == "ok") {
					$('#mail-msg').text('Message has been sent!').css('color','green');
					return true;
				}
				console.log(s);
				$('#mail-msg').text('Error while trying to send the message, please try again later.').css('color','red');

				setTimeout(function() {
					$('#mail-msg').remove();
				}, 5000);
			}
		});

	});
});


