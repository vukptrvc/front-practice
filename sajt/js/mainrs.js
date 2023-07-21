$(document).ready(function() { url: 'https://www.vukpetrovic.com/js/main.js';
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		var $form = $(this);
		var $a = $(this).children('input');
		for(var i=0; i < $a.length; i++) {
			if($a.eq(i).val() === "") {
				alert('Neka polja su prazna. Molimo, popunite sva polja!');
				return false;
			}
		}

		var data = $(this).serialize();

		$form.append('<span id="mail-msg" style="color:orange; font-weight: bold;">Poruka se šalje...</span>');

		$.ajax({
			type: 'post',
			url: 'https://www.vukpetrovic.com/sendmail.php',
			data: {data: data},
			success: function(s) {
				if(s == "ok") {
					$('#mail-msg').text('Poruka je poslata!').css('color','green');
					return true;
				}
				console.log(s);
				$('#mail-msg').text('Greška prilikom slanja poruke, pokušajte ponovo kasnije..').css('color','red');

				setTimeout(function() {
					$('#mail-msg').remove();
				}, 5000);
			}
		});

	});
});