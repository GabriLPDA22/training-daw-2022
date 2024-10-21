function toHoursMinutesSeconds(value) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    return `${hours}:${minutes}:${seconds}`;
}

// Ejemplo de prueba
console.log(toHoursMinutesSeconds(3600)); // Debería mostrar "1:0:0"
console.log(toHoursMinutesSeconds(3720)); // Debería mostrar "1:20:0"
console.log(toHoursMinutesSeconds(3725)); // Debería mostrar "1:20:5"
