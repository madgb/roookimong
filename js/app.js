$(document).ready(function() {
	$(".wrapper").hide();

	$(".cats-open").on('click', function() {
		$(".wrapper").slideToggle(400);
		$(window).scrollTop(100);
	});
});