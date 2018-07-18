$(document).ready(function() {
	$(".wrapper").hide();

	$(".cats-open").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".wrapper").slideToggle(400);
	});
});