var navi = function(){

	$("#header").find("a").css("cursor", "pointer");
	$("#footer").find("a").css("cursor", "pointer");
	$("#footer").find("a").click(scrolltop);

	//Kontakt
	$("#header-kontakt").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});	
	//Impressum
	$("#header-impressum").find("a").first().click(function() {
		$("#content-main").load("html-models/standard.html");
	});	
	//Startseite
	$("#header-home").find("a").first().click(function() {
		$("#content-main").load("html-models/startseite.html");
	});
	//Politik
	$("#header-politik").find("a").first().click(function() {
		$("#content-main").load("html-models/standard_youtube.html");
	});
	//Partei
	$("#header-partei").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});
	//Vor Ort
	$("#header-vorort").find("a").first().click(function() {
		$("#content-main").load("html-models/kontakt.html");
	});
	//Presse
	$("#header-presse").find("a").first().click(function() {
		$("#content-main").load("html-models/standard.html");
	});
	//Service
	$("#header-service").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});
	
	//handle footer-navi
	//Kontakt
	$("#footer-kontakt").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});	
	//Datenschutz
	$("#footer-datenschutz").find("a").first().click(function() {
		$("#content-main").load("html-models/standard.html");
	});	
	//AGB
	$("#footer-agb").find("a").first().click(function() {
		$("#content-main").load("html-models/standard_youtube.html");
	});	
	//Hilfe
	$("#footer-hilfe").find("a").first().click(function() {
		$("#content-main").load("html-models/startseite.html");
	});	
	//Impressum
	$("#footer-impressum").find("a").first().click(function() {
		$("#content-main").load("html-models/standard.html");
	});	
	//Startseite
	$("#footer-home").find("a").first().click(function() {
		$("#content-main").load("html-models/startseite.html");
	});
	//Politik
	$("#footer-politik").find("a").first().click(function() {
		$("#content-main").load("html-models/standard_youtube.html");
	});
	//Partei
	$("#footer-partei").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});
	//Vor Ort
	$("#footer-vorort").find("a").first().click(function() {
		$("#content-main").load("html-models/kontakt.html");
	});
	//Presse
	$("#footer-presse").find("a").first().click(function() {
		$("#content-main").load("html-models/standard.html");
	});
	//Service
	$("#footer-service").find("a").first().click(function() {
		$("#content-main").load("html-models/liste.html");
	});
};

var scrolltop = function(){$("html, body").animate({ scrollTop: 0 }, 600);};