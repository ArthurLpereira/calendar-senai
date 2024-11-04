<?php
$localhost = 'localhost';
$user = 'root';
$password = '';
$database = 'calendario';

$conn = new mysqli($localhost,$user,$password,$database);

if ($conn -> connect_error){
    echo 'falha na conexão' . $conn -> connect_error;
}
?>