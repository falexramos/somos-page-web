<?php

$host = 'localhost';
$database = 'u479185799_somos_i';
$username = 'u479185799_somos_i';
$password = '4w7rYS3&EL56%cRn!5@!4';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
