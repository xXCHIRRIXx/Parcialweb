// Función para cerrar los detalles del vuelo
function closeFlightDetails() {
    document.getElementById('flightDetails').style.display = 'none';
}

// Función para ver los detalles del vuelo
function viewFlightDetails(flightId) {
    let details = '';
    
    switch (flightId) {
        case 'flight1':
            details = `
                <strong>Vuelo:</strong> Medellín<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Medellín<br>
                <strong>Fecha y Hora:</strong> 2024-11-10 08:30 AM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $200 USD<br>
                <strong>Duración:</strong> 1h 15m<br>
                <strong>Descripción:</strong> Vuelo directo a Medellín.`;
            break;
        case 'flight2':
            details = `
                <strong>Vuelo:</strong> Moscú<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Moscú<br>
                <strong>Fecha y Hora:</strong> 2024-12-01 06:00 AM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $650 USD<br>
                <strong>Duración:</strong> 14h 30m<br>
                <strong>Descripción:</strong> Vuelo con una escala.`;
            break;
        case 'flight3':
            details = `
                <strong>Vuelo:</strong> Luanda<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Luanda<br>
                <strong>Fecha y Hora:</strong> 2024-11-15 11:00 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $780 USD<br>
                <strong>Duración:</strong> 20h 15m<br>
                <strong>Descripción:</strong> Vuelo con dos escalas.`;
            break;
        case 'flight4':
            details = `
                <strong>Vuelo:</strong> Londres<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Londres<br>
                <strong>Fecha y Hora:</strong> 2024-11-20 03:45 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $900 USD<br>
                <strong>Duración:</strong> 11h 45m<br>
                <strong>Descripción:</strong> Vuelo directo a Londres.`;
            break;
        case 'flight5':
            details = `
                <strong>Vuelo:</strong> Tokio<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Tokio<br>
                <strong>Fecha y Hora:</strong> 2024-12-05 10:00 AM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $1,200 USD<br>
                <strong>Duración:</strong> 18h 30m<br>
                <strong>Descripción:</strong> Vuelo con una escala.`;
            break;
        case 'flight6':
            details = `
                <strong>Vuelo:</strong> París<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> París<br>
                <strong>Fecha y Hora:</strong> 2024-12-10 02:00 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $850 USD<br>
                <strong>Duración:</strong> 12h 00m<br>
                <strong>Descripción:</strong> Vuelo directo a París.`;
            break;
        case 'flight7':
            details = `
                <strong>Vuelo:</strong> Sídney<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Sídney<br>
                <strong>Fecha y Hora:</strong> 2024-12-15 11:30 AM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $1,500 USD<br>
                <strong>Duración:</strong> 24h 00m<br>
                <strong>Descripción:</strong> Vuelo con una escala.`;
            break;
        case 'flight8':
            details = `
                <strong>Vuelo:</strong> Roma<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Roma<br>
                <strong>Fecha y Hora:</strong> 2024-12-20 07:45 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $750 USD<br>
                <strong>Duración:</strong> 13h 20m<br>
                <strong>Descripción:</strong> Vuelo directo a Roma.`;
            break;
        case 'flight9':
            details = `
                <strong>Vuelo:</strong> Miami<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Miami<br>
                <strong>Fecha y Hora:</strong> 2024-12-25 05:00 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $300 USD<br>
                <strong>Duración:</strong> 5h 00m<br>
                <strong>Descripción:</strong> Vuelo directo a Miami.`;
            break;
        case 'flight10':
            details = `
                <strong>Vuelo:</strong> Cancún<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Cancún<br>
                <strong>Fecha y Hora:</strong> 2024-11-30 09:30 AM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $450 USD<br>
                <strong>Duración:</strong> 4h 30m<br>
                <strong>Descripción:</strong> Vuelo directo a Cancún.`;
            break;
        case 'flight11':
            details = `
                <strong>Vuelo:</strong> Barcelona<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Barcelona<br>
                <strong>Fecha y Hora:</strong> 2024-12-28 01:00 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $800 USD<br>
                <strong>Duración:</strong> 12h 10m<br>
                <strong>Descripción:</strong> Vuelo con una escala.`;
            break;
        case 'flight12':
            details = `
                <strong>Vuelo:</strong> Nueva York<br>
                <strong>Origen:</strong> Bogotá<br>
                <strong>Destino:</strong> Nueva York<br>
                <strong>Fecha y Hora:</strong> 2024-12-31 04:15 PM<br>
                <strong>Estado:</strong> Disponible<br>
                <strong>Precio:</strong> $700 USD<br>
                <strong>Duración:</strong> 6h 45m<br>
                <strong>Descripción:</strong> Vuelo directo a Nueva York.`;
            break;
        default:
            details = 'No hay detalles disponibles para este vuelo.';
    }

    document.getElementById('detailsContent').innerHTML = details;
    document.getElementById('flightDetails').style.display = 'block';

    // Desplazar hacia la sección de detalles
    document.getElementById('flightDetails').scrollIntoView({ behavior: 'smooth' });
}

// Función para comprar el vuelo
function buyFlight() {
    alert("¡Gracias por tu compra!"); // Puedes personalizar este mensaje
    closeFlightDetails(); // Cierra los detalles después de comprar
}
