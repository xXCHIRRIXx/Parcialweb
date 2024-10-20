document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío del formulario

            // Obtener los valores ingresados
            const correo = document.getElementById('correo').value;
            const contrasena = document.getElementById('contrasena').value;

            const usuarioValido = (correo === 'admin00@admin.com' && contrasena === 'admin00');

            if (usuarioValido) {
                localStorage.setItem('isLoggedIn', 'true');
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.textContent = 'Inicio de sesión exitoso. Bienvenido!';
                    successMessage.style.display = 'block'; 
                }

                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 1000); 
            } else {
                alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
            }
        });
    } else {
        console.error('Elemento no encontrado: loginForm');
    }
});
