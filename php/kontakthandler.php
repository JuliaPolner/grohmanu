<?php
// $connection = mysql_connect("localhost:3306", "root", "Willy Brandt");
// $db = mysql_select_db("spd-site", $connection);
$betreff=$_POST['betreff1'];
$text=$_POST['text1'];
$name=$_POST['name1'];
$vorname=$_POST['vorname1'];
$email=$_POST['email1'];
$tel=$_POST['tel1'];

$from = "From: ".$vorname." ".$name." <".$email.">\n";
$from .= "Reply-To: ".$email."\n";
// $from .= "Content-Type: text/html\n";
$nachricht = "Kontaktanfrage von: ".$name.", ".$vorname."\nBetreff: ".$betreff."\n\n".$text."\n\nTelefonnummer: ".$tel;

mail('vorstand@spd-lahnau.de', 'Kontaktformular', $nachricht, $from);
// $query = mysql_query(sprintf("insert into kontakt(betreff, text, name, vorname, email, nummer) values ('%s', '%s', '%s', '%s', '%s', '%s')", $betreff, $text, $name, $vorname, $email, $tel));
// mysql_close($connection);
?>