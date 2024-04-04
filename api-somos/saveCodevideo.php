<?php
// Incluye la configuración de la base de datos
include 'config.php';

// Configura los encabezados CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Verifica si se proporcionó el parámetro 'code' en la solicitud GET
if (isset($_GET['code'])) {
    // Obtén el valor del parámetro 'code'
    $code = $_GET['code'];

    // Obtén la fecha actual en formato 'YYYY-MM-DD'
    $date_register = date('Y-m-d');

    // Ejecuta la consulta de inserción
    $query = "INSERT INTO `videos_youtube` (`code`,  `description`, `title`,`date_register`, `category`, `user`) VALUES ('$code', 'Somos Comunidad Predica', '','$date_register', '5', '1')";

    if ($conn->query($query)) {
        // Si la inserción es exitosa, devuelve un mensaje de éxito
        echo "Inserción exitosa en la base de datos.";
    } else {
        // Si hay un error en la inserción, devuelve un mensaje de error
        echo "Error en la inserción: " . $conn->error;
    }
} else {
    // Si no se proporcionó el parámetro 'code', devuelve un mensaje de error
    echo "Parámetro 'code' no proporcionado en la solicitud.";
}

// Cierra la conexión a la base de datos
$conn->close();
?>
