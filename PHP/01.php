
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01</title>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body class="main">
<form method=post action="<? echo $PATH_INFO; ?>">
<input type="text" name="text" value="" size=10>
<br>
<input type="submit" name="sub" value="Enviar!">
<h2 class='main'>
<?php
    if ( $text=$_POST['text']) 
    echo "vc digitou\"$text\"<br>";

    echo "eu digitei : \"$text\"<br>";
?></h2>
</form>
</body>
</html>
