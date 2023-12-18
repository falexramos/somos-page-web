<?php
// index.php - Tu controlador principal

// Obtén la ruta de la solicitud
$request_uri = $_SERVER['REQUEST_URI'];

// Divide la ruta en partes usando '/'
$uri_parts = explode('/', $request_uri);

// La primera parte generalmente será vacía debido a la barra inicial
// La segunda parte contendrá el nombre del recurso
$resource = $uri_parts[1];

// Resto de las partes de la ruta
$params = array_slice($uri_parts, 2);

// En función del recurso, realiza acciones específicas
switch ($resource) {
    case 'getCodeVideoPredica.php':
        include 'getCodeVideoPredica.php';
        break;
    case 'config.php':
        include 'config.php';
        break;
    case 'saveCodevideo.php':
        include 'saveCodevideo.php';
        break;
    // Puedes agregar más casos según tus necesidades
    default:
        echo "¡Bienvenido a la API de Iglesia Somos!";
}
?>
