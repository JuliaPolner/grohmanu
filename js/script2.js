$(document).ready(function() {
	//Für alle "PrettyPhotos"
	$("a[rel^='prettyPhoto']").prettyPhoto();

	//Für das Kontaktformular
	$('#formcontact').submit(function(event) {
		event.preventDefault();
		var betreff = $("#tTitle").val();
		var text = $("#tMessage").val();
		var name = $("#sName").val();
		var vorname = $("#fName").val();
		var email = $("#email").val();
		var tel = $("#phone").val();

		$.post("php/kontakthandler.php", {
			betreff1 : betreff,
			text1 : text,
			name1 : name,
			vorname1 : vorname,
			email1 : email,
			tel1 : tel
		}).always(function() {
			event.target.submit();
		});
	});

	//Für alle Navieinträge mit .nolink
	$(".nolink").css("cursor", "default");

	//Für den BoxSlider
	$('.teaserslider ul').bxSlider({
		responsive: true,
		controls: false,
		auto: true,
		autoControls: true,
		captions: true,
		speed: "4000",
		pause: "10000"
	});
});