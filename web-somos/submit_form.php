<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar datos del formulario y aplicar medidas de seguridad
    $nombre = htmlspecialchars(substr(filter_var($_POST["full-name"], FILTER_SANITIZE_STRING), 0, 100), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(substr(filter_var($_POST["email"], FILTER_SANITIZE_EMAIL), 0, 100), ENT_QUOTES, 'UTF-8');
    $mensaje = htmlspecialchars(substr(filter_var($_POST["message"], FILTER_SANITIZE_STRING), 0, 1000), ENT_QUOTES, 'UTF-8');

    // Validación de campos obligatorios y formato de correo electrónico
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        // Manejo de campos vacíos
        echo "Por favor, completa todos los campos.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Manejo de dirección de correo electrónico inválida
        echo "Por favor, ingresa una dirección de correo electrónico válida.";
        exit;
    }

    // Configuración del correo y prevención de inyección de cabeceras
    $to = "contacto@iglesiasomos.es"; // Cambia esto con tu dirección de correo
    $subject = mb_encode_mimeheader("Nuevo mensaje de contacto de $nombre", "UTF-8");
    $message = "Nombre: $nombre\nCorreo Electrónico: $email\nMensaje:\n$mensaje";

    // Configuración del correo de agradecimiento
    $subjectUsuario = "Gracias por ponerte en contacto con Somos tu comunidad";
    $messageUsuario = "Hola $nombre,\n\nGracias por ponerte en contacto con nosotros. Pronto nos pondremos en contacto contigo.\n\nAtentamente,\nSomos tu comunidad";

    // Configurar el remitente y el nombre del remitente
    $headers = "From: Somos tu comunidad <contacto@iglesiasomos.es>";

    // Enviar el correo principal
    mail($to, $subject, $message, $headers);

    // Enviar correo de agradecimiento al usuario
    mail($email, $subjectUsuario, $messageUsuario,$headers);

    // Redireccionar a una página de confirmación
    header("Location: index.html");
} else {
    // Manejo de solicitudes GET (puedes redirigir o mostrar un error)
    echo "Acceso no permitido.";
}
?>
