<?php
// Incluye la configuración de la base de datos
include 'config.php';

// Configura los encabezados CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Realiza la consulta a la base de datos
$query = "SELECT code, category_video, date_register FROM videos_youtube";
$result = $conn->query($query);

// Verifica si la consulta fue exitosa
if ($result) {
    // Inicializa un array para almacenar los resultados
    $response = array();

    // Recorre los resultados y almacena en el array
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }

    // Devuelve los resultados en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Si hay un error en la consulta, devuelve un mensaje de error
    echo "Error en la consulta: " . $conn->error;
}

// Cierra la conexión a la base de datos
$conn->close();
?>
