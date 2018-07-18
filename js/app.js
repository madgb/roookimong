$(document).ready(function() {
	$(".wrapper").hide();

	$(".cats-open").on('click', function() {
		$( 'html, body' ).stop().animate( { scrollTop : '100' } );
		$(".wrapper").slideToggle(400);
	});
});