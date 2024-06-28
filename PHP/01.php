
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method=post action="<? echo $PATH_INFO; ?>">
<input type="text" name="text" value="" size=10>
<br>
<input type="submit" name="sub" value="Enviar!">
<br>
<?php
    if ( $text=$_POST['text']) 
    echo "vc digitou\"$text\"<br>";

    echo "eu digitei : \"$text\"<br>";
?>
</form>
</body>
</html>
