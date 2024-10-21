function printMultiplicationTables() {
    let result = ''; // Variable para almacenar las tablas de multiplicar en formato de texto
    
    // Bucle externo: recorre cada fila
    for (let i = 1; i <= 10; i++) {
        // Bucle interno: recorre cada columna
        for (let j = 1; j <= 10; j++) {
            result += (i * j).toString().padStart(4, ' '); // Multiplica y formatea con espacios
        }
        result += '\n'; // Salto de línea al final de cada fila
    }

    console.log(result); // Imprime todas las tablas de multiplicar
}

printMultiplicationTables();

// expected output
//     1   2   3   ...
// 1   1   2   3   ...
// 2   2   4   6   ...
// 3   3   6   9   ...
// 4   4   8   12  ...
// 5   5   10  15  ...
// 6   6   12  18  ...
// 7   7   14  21  ...
// 8   8   16  24  ...
// 9   9   18  27  ...
// 10  10  20  30  ...
