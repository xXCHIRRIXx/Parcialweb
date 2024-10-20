// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const tripDetails = document.getElementById('tripDetails');
    const returnDateGroup = document.getElementById('returnDateGroup');

    // Función para mostrar u ocultar los campos de viaje
    function updateTripDetails() {
        const tripType = document.querySelector('input[name="tripType"]:checked').value;
        returnDateGroup.style.display = tripType === 'roundTrip' ? 'block' : 'none'; // Mostrar/ocultar fecha de regreso
    }

    // Event listener para los cambios en las opciones de viaje
    const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateTripDetails);
    });

    // Inicializar la vista al cargar la página
    updateTripDetails();

    // Evento para manejar el envío del formulario de empleados
    document.getElementById('employeeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Implementar la lógica para agregar o editar empleados
        const employeeId = document.getElementById('employeeId').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const position = document.getElementById('position').value;
        const status = document.getElementById('status').value;

        if (employeeId) {
            // Actualizar empleado existente (a implementar)
            console.log("Actualizando empleado:", { employeeId, firstName, lastName, email, phone, position, status });
        } else {
            // Agregar nuevo empleado (a implementar)
            console.log("Agregando nuevo empleado:", { firstName, lastName, email, phone, position, status });
        }

        // Limpiar formulario
        document.getElementById('employeeForm').reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Evita el envío del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const fechaEntrada = document.getElementById('fechaEntrada').value;
        const horaEntrada = document.getElementById('horaEntrada').value;
        const fechaSalida = document.getElementById('fechaSalida').value;
        const horaSalida = document.getElementById('horaSalida').value;

        // Validar que todos los campos requeridos estén completos
        if (nombre && apellidos && correo && telefono && fechaEntrada && horaEntrada && fechaSalida && horaSalida) {
            // Mostrar el modal de éxito si todo está completo
            $('#successModal').modal('show');
        } else {
            alert('Por favor, completa todos los campos antes de reservar.');
        }
    });
});

// Array para almacenar empleados
let employees = [
    { id: 1, firstName: "Juan", lastName: "Pérez", email: "juan.perez@email.com", phone: "3235416514", position: "Gerente", status: "Activo" },
    { id: 2, firstName: "Juan", lastName: "Castro", email: "juan99asdadz@email.com", phone: "3216546540", position: "Logística", status: "Activo" },
    { id: 3, firstName: "Marlon", lastName: "Castro", email: "marlon99castro00@email.com", phone: "3214567890", position: "Gerente", status: "Activo" },
    { id: 4, firstName: "Erika", lastName: "Hernandez", email: "erikisvis2023@email.com", phone: "3215666190", position: "Piloto", status: "Activo" }
];

// Función para renderizar empleados en la tabla
function renderEmployees() {
    const employeeTableBody = document.getElementById('employeeTableBody');
    employeeTableBody.innerHTML = '';  // Limpiar el contenido existente

    employees.forEach(employee => {
        const row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
                <td>${employee.position}</td>
                <td>${employee.status}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editEmployee(${employee.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${employee.id})">Eliminar</button>
                </td>
            </tr>
        `;
        employeeTableBody.innerHTML += row;
    });
}

// Función para agregar o actualizar un empleado
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('employeeId').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;
    const status = document.getElementById('status').value;

    if (id) {
        // Actualizar empleado
        const index = employees.findIndex(emp => emp.id == id);
        employees[index] = { id: parseInt(id), firstName, lastName, email, phone, position, status };
    } else {
        // Agregar nuevo empleado
        const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
        employees.push({ id: newId, firstName, lastName, email, phone, position, status });
    }

    // Limpiar formulario y actualizar tabla
    resetForm();
    renderEmployees();
});

// Función para editar un empleado
function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    document.getElementById('employeeId').value = employee.id;
    document.getElementById('firstName').value = employee.firstName;
    document.getElementById('lastName').value = employee.lastName;
    document.getElementById('email').value = employee.email;
    document.getElementById('phone').value = employee.phone;
    document.getElementById('position').value = employee.position;
    document.getElementById('status').value = employee.status;
}

// Función para eliminar un empleado
function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
}

// Función para limpiar el formulario
function resetForm() {
    document.getElementById('employeeId').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('position').value = '';
    document.getElementById('status').value = 'Activo';
}

// Inicializar la tabla de empleados al cargar la página
window.onload = function() {
    renderEmployees();
};
