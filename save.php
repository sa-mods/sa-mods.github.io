<?php
include_once("db.php");

$nome = $_POST("nome"); 
$email = $_POST("email"); 
$pass = $_POST("password"); 

$instrucion = "INSERT INTO dados(nome, email, password) VALUES ('$nome','$email','$pass')";
$show = "SELECT * FROM dados";

$result = mysqli_query($conn, $instrucion);
$result2 = mysqli_query($conn, $show);

echo $result2;

?>