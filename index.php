<?php
error_reporting ( 0 );

if (isset ( $_GET ["site"] ))
	$site = $_GET ["site"];
else
	$site = false;

if (isset ( $_GET ["id"] ))
	$id = $_GET ["id"];
else
	$id = false;

if ($site != false) {
	if ($site == "article" && $id != false) {
		// Lade Artikel mit id x
	} else {
		$file = "html-content/" . $site . ".html";
	}
	if (! file_exists ( $file ))
		$file = false;
} else {
	$file = "html-content/startseite.html";
	if (! file_exists ( $file ))
		$file = false;
}
?>

<!doctype html>
<html class="no-js" lang="de">
<head>

<title>SPD Ortsverein Lahnau</title>

<!-- Metadaten -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width">
<meta name="content-language" content="de">

<meta name="description"
	content="Homepage des SPD Ortsvereins und der Fraktion Lahnau">
<meta name="keywords" content="SPD, Lahnau, Ortsverein, SPD-Lahnau,">
<meta name="audience" content="Alle">
<meta name="copyright" content="(c) SPD Lahnau 2014">
<meta name="author" content="Manuel Groh">
<!-- Ende Metadaten -->

<!-- Einbindung externe Stylesheets -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/screen.css">
<link rel="stylesheet" href="prettyphoto/css/prettyPhoto.css">
<link rel="stylesheet" href="css/jquery.bxslider.css">
<!-- Ende Einbindung externe Stylesheets  -->

<!-- Einbindung Javascripte -->
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/modernizr-2.8.3.min.js"></script>
<script src="js/jquery.hoverIntent.min.js"></script>
<script src="js/jquery.bxSlider.min.js"></script>
<script src="js/script.js"></script>
<script src="prettyphoto/js/jquery.prettyPhoto.js"></script>
<script src="js/script2.js"></script>
<!-- Ende Einbindung Javascripte -->

<link rel="shortcut icon" type="image/ico" href="favicon.ico">

</head>
<body>

	<!-- Header BEGINN  -->
	<header id="header">

		<!-- Meta navigation -->
		<ul id="header-meta">
			<li><a href="impressum">Impressum</a></li>
		</ul>


		<!-- Hauptnavigation BEGINN -->
		<nav id="header-nav">
			<ul>
				<li class="home"><a href="index">Startseite</a></li>

				<li><a href="aktuell">Aktuell</a></li>

				<li><a class="nolink">Partei</a>
					<div class="flyout">
						<div class="col">
							<h6>
								<a href="lahnau">In Lahnau</a>
							</h6>
							<ul>
								<li><a href="verein">Im Ortsverein</a></li>
								<li><a href="fraktion">In der Fraktion</a></li>
								<li><a href="vorstand">Im Gemeinde-vorstand</a></li>
							</ul>
						</div>
						<div class="col">
							<h6>
								<a href="region">In der Region</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="ueberregional">In Europa, Bund, Land und Kreis</a>
							</h6>
						</div>
					</div></li>

				<li><a class="nolink">Themen</a>
					<div class="flyout">
						<div class="col">
							<h6>
								<a href="thema1">Kindergärten</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="thema2">Ortskerne</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="thema3">Amthof</a>
							</h6>
						</div>
						<!-- <div class="col">
							<h6>
								<a href="thema4"></a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="thema5"></a>
							</h6>
						</div> -->
					</div></li>

				<li><a href="kontakt">Kontakt</a></li>

				<li><a class="nolink">Service</a>
					<div class="flyout">
						<div class="col">
							<h6>
								<a href="termine">Termine</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="downloads">Downloads</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="newsletter">Newsletter</a>
							</h6>
						</div>
						<div class="col">
							<h6>
								<a href="rssfeed">RSS-Feed</a>
							</h6>
						</div>
					</div></li>
			</ul>
		</nav>

		<!-- Hauptnavigation ENDE -->

		<!-- Logo  -->
		<a href="bilder/SPD-Lahnau-Logo-groß.gif" rel="prettyPhoto" id="logo"><img
			src="img/header/logo-klein.png" alt="SPD Lahnau" /></a>
		<!-- Logo ENDE -->

	</header>

	<!-- Header ENDE -->

	<!-- Start Content -->
	<div id="main" role="main">

		<!-- Main Content und Sidebar -->
		<div id="content">
			<div id="article-teaser" class="teaserslider">
				<ul>
					<li><a href=""><img title="Bild1"
							src="img/header/box1.png" /></a></li>
					<li><a href=""><img title="Bild2"
							src="img/header/box2.png" /></a></li>
					<li><a href=""><img title="Bild3"
							src="img/header/box3.png" /></a></li>
				</ul>
			</div>
			<section id="content-main">
			<?php
			if ($file)
				include_once $file;
			else
				echo '<h4>404 - Die Seite "' . $site . '" wurde nicht gefunden.</h4>';
			?>
			</section>
			<aside id="sidebar">

				<div class="sidebar">
					<h3>Termine</h3>
					<p>
						<a href="">01.01.15 00:00 Neujahr</a>
					</p>
					<p>
						<a href="">06.12.15 20:00 Nikolaus</a>
					</p>
					<p>
						<a href="">24.12.15 18:00 Weihnachten</a>
					</p>
				</div>

				<hr>

				<div class="sidebar">
					<h3>Artikel</h3>
					<h6>Artikelüberschrift</h6>
					<p>Anreißer</p>
					<hr>
					<h6>Artikelüberschrift</h6>
					<p>
						Areißer<br>u.U. auch mehrzeilig
					</p>
					<hr>
					<h6>Das ist eine ganz ganz lange Artikelüberschrift</h6>
					<p>Ohne Text</p>
				</div>

				<!--<div class="support-request">
					<h3>Sie fragen, wir antworten</h3>
					<h4>Innerhalb von 24 Stunden</h4>
					<form action="#" method="post">
						<textarea id="support-request-text" name="support-request-text"
							placeholder="Ihre Frage"></textarea>
						<input type="text" id="support-request-email"
							name="support-request-email" placeholder="E-Mail Adresse" />
						<button type="submit">Absenden</button>
						<input type="checkbox" id="support-request-terms"
							name="support-request-terms"> <label><a href="#">Einverständniserklärung</a></label>
					</form>
					<a href="#" class="more">Alle Fragen und Antworten</a>
				</div>

				<div class="video-podcast">
					<h2>Video</h2>
					<iframe width="300" height="168"
						src="http://www.youtube.com/embed/DOi1gKQ70jU" frameborder="0"
						allowfullscreen></iframe>
					<a href="#">Mehr Videos auf Youtube.com</a>
				</div> -->

			</aside>
		</div>

		<div class="teaser-wrapper">
			<div class="teaser-content">
				<h2>Mitmachen und weitersagen!</h2>

				<!-- Bilder müssen genau 300x300px haben, ansonsten werden sie abgeschnitten -->
				<div class="teaser image">
					<img src="img/teaser/Mitgliederwerben.png" alt="Mitgliederwerben" />
					<div class="links">
						<a href="" class="more">Mitgliederwerben</a>
					</div>
				</div>

				<div class="teaser image">
					<img src="img/teaser/Logo_150JahreSPD.png" alt="150 Jahre SPD" />
					<div class="links">
						<a href="" class="more">150 Jahre SPD</a>
					</div>
				</div>

				<div class="teaser image">
					<img src="img/teaser/Mitmachen.jpg" alt="Mitmachmachen" />
					<div class="links">
						<a href="" class="more">Mitmachen</a>
					</div>
				</div>

			</div>
		</div>

	</div>
	<!-- End of Main Content Area -->


	<!-- Start of footer -->
	<footer id="footer">

		<!-- Main footer showing a sitemap -->
		<ul id="footer-main">

			<li>
				<h6>
					<a href="aktuell">Aktuell</a>
				</h6>
			</li>

			<li>
				<h6>Partei</h6>
				<ul>
					<li><a href="lahnau">In Lahnau</a></li>
					<li><a href="verein">Im Ortsverein</a></li>
					<li><a href="fraktion">In der Fraktion</a></li>
					<li><a href="vorstand">Im Gemeindevorstand</a></li>
					<li><a href="region">In der Region</a></li>
					<li><a href="ueberregional">In Europa, Bund, Land und Kreis</a></li>
				</ul>
			</li>

			<li>
				<h6>Themen</h6>
				<ul>
					<li><a href="thema1">Kindergärten</a></li>
					<li><a href="thema2">Ortskerne</a></li>
					<li><a href="thema3">Amthof</a></li>
					<!-- 					<li><a href="thema4"></a></li> -->
					<!-- 					<li><a href="thema5"></a></li> -->
				</ul>
			</li>

			<li>
				<h6 id="footer-kontakt">
					<a href="kontakt">Kontakt</a>
				</h6>
			</li>

			<li>
				<h6 id="footer-service">Service</h6>
				<ul>
					<li><a href="termine">Termine</a></li>
					<li><a href="downloads">Downloads</a></li>
					<li><a href="newsletter">Newsletter</a></li>
					<li><a href="rssfeed">RSS-Feed</a></li>
				</ul>
			</li>
		</ul>

		<!-- Mini footer showing meta links -->
		<ul id="footer-meta">
			<li><a href="impressum">Impressum</a></li>
		</ul>
	</footer>
	<!-- End of footer -->
</body>
</html>