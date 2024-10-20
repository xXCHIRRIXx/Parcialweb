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

});
