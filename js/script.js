jQuery(document).ready(function() {

	$("#content-main").load("html-models/startseite.html");
	
	// handle flyout menu	
	function flyoutMenuDown(){$(this).stop().addClass('active').find('.flyout').slideDown('fast');} 
	function flyoutMenuUp(){$(this).stop().removeClass('active').find('.flyout').slideUp('fast');}
	var flyoutMenu = {    
			over: flyoutMenuDown,
			interval: 200,
			out: flyoutMenuUp
	};
	$('#header-nav ul li').hoverIntent(flyoutMenu);


	// handle multicontentbox teaser
	$('.multicontentbox .text a .subline').hide();
	$('.multicontentbox .text a').bind('mouseenter', function(){
		$(this).find('.subline').slideDown(200);
	});

	$('.multicontentbox .text a').bind('mouseleave', function(){
		$(this).find('.subline').slideUp(200);
	});

	$('.teasercarousel-single ul').bxSlider({
		displaySlideQty: 1,
		controls: false,
		auto: true,
		pause: 10000
	});

	$('.teasercarousel-multi ul').bxSlider({
		displaySlideQty: 2,
		moveSlideQty: 1,
		controls: false,
		auto: true,
		pause: 10000
	});


	// handle teaserslider
	$('.teaserslider ul').bxSlider({
		displaySlideQty: 3,
		controls: true,
		auto: false
	});


	// handle article rating
	$('.rating-stars').each(function(){

		$(this).find('li').bind('mouseenter', function(){
			$(this).parent().removeClass('vote-1').removeClass('vote-2').removeClass('vote-3').removeClass('vote-4').removeClass('vote-5');
			var i = $(this).index() + 1;
			$(this).parent().addClass('vote-'+i+'');
		});

		$(this).bind('mouseleave', function(){
			$(this).removeClass('vote-1').removeClass('vote-2').removeClass('vote-3').removeClass('vote-4').removeClass('vote-5');
		});
	});

	// handle socialshareprivacy 
	if($('#socialshareprivacy').length > 0){
		$('#socialshareprivacy').socialSharePrivacy(); 
	}

	//handle navigation
	navi();
	/*$("#header-nav").find("a").css("cursor", "pointer");
	
	//Startseite
	$("#navi-home").find("a").first().on("click", function() {
		$("#content-main").load("html-models/startseite.html");
	});
	//Politik
	$("#navi-politik").find("a").first().on("click", function() {
		$("#content-main").load("html-models/standard_youtube.html");
	});
	//Partei
	$("#navi-partei").find("a").first().on("click", function() {
		$("#content-main").load("html-models/liste.html");
	});
	//Vor Ort
	$("#navi-vorort").find("a").first().on("click", function() {
		$("#content-main").load("html-models/kontakt.html");
	});
	//Presse
	$("#navi-presse").find("a").first().on("click", function() {
		$("#content-main").load("html-models/standard.html");
	});
	//Service
	$("#navi-service").find("a").first().on("click", function() {
		$("#content-main").load("html-models/liste.html");
	});*/
});