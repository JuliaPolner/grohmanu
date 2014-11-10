var navi = function(){

	var content = $("#content-main");
	var body = $("html, body");
	var scrolltop = function(){body.animate({ scrollTop: 0 }, 600);};
	content.load("html-content/startseite.html");

	$("#header").find(".link").css("cursor", "pointer");
	$("#footer").find("a").css("cursor", "pointer");
	$("#footer").find("a").click(scrolltop);

	//Impressum
	$("#header-impressum").find("a").first().click(function() {
		content.load("html-content/impressum.html");
	});	
	//Startseite
	$("#header-home").find("a").first().click(function() {
		content.load("html-content/startseite.html");
	});
	//Aktuell
	$("#header-aktuell").find("a").first().click(function() {
		content.load("html-content/aktuell.html");
	});
	//In Lahnau
	$("#header-lahnau").find("a").first().click(function() {
		content.load("html-content/lahnau.html");
	});
	//Der Ortsverein
	$("#header-verein").find("a").first().click(function() {
		content.load("html-content/lahnau.html");
	});
	//Die Fraktion
	$("#header-fraktion").find("a").first().click(function() {
		content.load("html-content/fraktion.html");
	});
	//Der Gemeindevorstand
	$("#header-vorstand").find("a").first().click(function() {
		content.load("html-content/vorstand.html");
	});
	//In der Region
	$("#header-region").find("a").first().click(function() {
		content.load("html-content/region.html");
	});
	//In Europa, Bund, Land und Kreis
	$("#header-ueberregional").find("a").first().click(function() {
		content.load("html-content/ueberregional.html");
	});
	//Thema 1
	$("#header-thema1").find("a").first().click(function() {
		content.load("html-content/thema1.html");
	});
	//Thema 2
	$("#header-thema2").find("a").first().click(function() {
		content.load("html-content/thema2.html");
	});
	//Thema 3
	$("#header-thema3").find("a").first().click(function() {
		content.load("html-content/thema3.html");
	});
	//Thema 4
	$("#header-thema4").find("a").first().click(function() {
		content.load("html-content/thema4.html");
	});
	//Thema 5
	$("#header-thema5").find("a").first().click(function() {
		content.load("html-content/thema5.html");
	});
	//Kontakt
	$("#header-kontakt").find("a").first().click(function() {
		content.load("html-content/kontakt.html");
	});
	//Termine
	$("#header-termine").find("a").first().click(function() {
		content.load("html-content/termine.html");
	});
	//Downloads
	$("#header-downloads").find("a").first().click(function() {
		content.load("html-content/downloads.html");
	});
	//Newsletter
	$("#header-newsletter").find("a").first().click(function() {
		content.load("html-content/newsletter.html");
	});
	//RSS-Feed
	$("#header-rssfeed").find("a").first().click(function() {
		content.load("html-content/rssfeed.html");
	});

	//handle footer-navi
	//Datenschutz
	$("#footer-datenschutz").find("a").first().click(function() {
		content.load("html-content/datenschutz.html");
	});	
	//AGB
	$("#footer-agb").find("a").first().click(function() {
		content.load("html-content/agb.html");
	});	
	//Hilfe
	$("#footer-hilfe").find("a").first().click(function() {
		content.load("html-content/hilfe.html");
	});	
	//Impressum
	$("#footer-impressum").find("a").first().click(function() {
		content.load("html-content/impressum.html");
	});
	//Aktuell
	$("#footer-aktuell").find("a").first().click(function() {
		content.load("html-content/aktuell.html");
	});
	//In Lahnau
	$("#footer-lahnau").find("a").first().click(function() {
		content.load("html-content/lahnau.html");
	});
	//Der Ortsverein
	$("#footer-verein").find("a").first().click(function() {
		content.load("html-content/verein.html");
	});
	//Die Fraktion
	$("#footer-fraktion").find("a").first().click(function() {
		content.load("html-content/fraktion.html");
	});
	//Der Gemeindevorstand
	$("#footer-vorstand").find("a").first().click(function() {
		content.load("html-content/vorstand.html");
	});
	//In der Region
	$("#footer-region").find("a").first().click(function() {
		content.load("html-content/region.html");
	});
	//In Europa, Bund, Land und Kreis
	$("#footer-ueberregional").find("a").first().click(function() {
		content.load("html-content/ueberregional.html");
	});
	//Thema 1
	$("#footer-thema1").find("a").first().click(function() {
		content.load("html-content/thema1.html");
	});
	//Thema 2
	$("#footer-thema2").find("a").first().click(function() {
		content.load("html-content/thema2.html");
	});
	//Thema 3
	$("#footer-thema3").find("a").first().click(function() {
		content.load("html-content/thema3.html");
	});
	//Thema 4
	$("#footer-thema4").find("a").first().click(function() {
		content.load("html-content/thema4.html");
	});
	//Thema 5
	$("#footer-thema5").find("a").first().click(function() {
		content.load("html-content/thema5.html");
	});
	//Kontakt
	$("#footer-kontakt").find("a").first().click(function() {
		content.load("html-content/kontakt.html");
	});
	//Termine
	$("#footer-termine").find("a").first().click(function() {
		content.load("html-content/termine.html");
	});
	//Downloads
	$("#footer-downloads").find("a").first().click(function() {
		content.load("html-content/downloads.html");
	});
	//Newsletter
	$("#footer-newsletter").find("a").first().click(function() {
		content.load("html-content/newsletter.html");
	});
	//RSS-Feed
	$("#footer-rssfeed").find("a").first().click(function() {
		content.load("html-content/rssfeed.html");
	});
}