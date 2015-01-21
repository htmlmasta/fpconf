$(document).ready(function() {
	var hash = document.location.hash;
	if (hash) {
		$('.nav-link[href=' + document.location.hash + ']').addClass('active');
	}
	$('.nav-link').click(function() {
		$(this).addClass('active').closest('li').siblings().find('a').removeClass('active');
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

	$('.report-title').click(function() {
		$(this).next().slideToggle();
		return false;
	});

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(55.747193, 37.663098),
		scrollwheel: false,
		draggable: !(window.DocumentTouch && document instanceof DocumentTouch),
		streetViewControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		panControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		}
	});
	map.mapTypes.set('toner', new google.maps.StamenMapType('toner'));
	map.setMapTypeId('toner');
});
