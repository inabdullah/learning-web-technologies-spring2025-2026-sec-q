<!DOCTYPE html>
<html>
<head>
    <title>Name Retain</title>
</head>
<body>

<?php
$name = "";
if(isset($_POST["name"])) {
    $name = $_POST["name"];
}
?>

<form method="post">
    <fieldset>
        <legend>Name</legend>
        <input type="text" name="name" value="<?php echo $name; ?>">
        <br>
        <hr>
        <br>
        <input type="submit" value="Submit">
    </fieldset>
    
</form>

<?php
if($name != "") {
    echo "Your name is: " . $name;
}
?>

</body>
</html>