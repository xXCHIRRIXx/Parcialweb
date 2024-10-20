// Verificar si el usuario ha iniciado sesión
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Obtener la URL actual
const currentURL = window.location.href;

// Si no ha iniciado sesión y no está en la página de inicio de sesión, redirigir
if (!isLoggedIn && !currentURL.includes('sesion.html')) {
    window.location.href = 'sesion.html'; // Redirigir a la página de inicio de sesión
}
