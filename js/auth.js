// auth.js

// Función para actualizar los enlaces de autenticación
function updateAuthLinks() {
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');

    if (localStorage.getItem('isLoggedIn')) {
        loginLink.style.display = 'none'; // Oculta el enlace de inicio de sesión
        logoutLink.style.display = 'block'; // Muestra el enlace de cierre de sesión
    } else {
        loginLink.style.display = 'block'; // Muestra el enlace de inicio de sesión
        logoutLink.style.display = 'none'; // Oculta el enlace de cierre de sesión
    }
}

// Evento para manejar el cierre de sesión
document.getElementById('logoutLink').addEventListener('click', function () {
    localStorage.removeItem('isLoggedIn'); // Elimina el estado de inicio de sesión
    updateAuthLinks(); // Actualiza los enlaces de autenticación
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirige al usuario a la página de inicio
    }, 1000); // 1 segundo de espera antes de redirigir
});

// Llama a la función para actualizar los enlaces al cargar la página
window.onload = function () {
    updateAuthLinks();
};
