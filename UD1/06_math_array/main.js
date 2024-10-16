function doCalculation(array) {
    let sum = 0;
    let max = array[0];
    let min = array[0];
    
    // for para recorrer el array
    for (let i = 0; i < array.length; i++) {
        // Suma
        sum += array[i];

        // máximo
        if (array[i] > max) {
            max = array[i];
        }

        // mínimo
        if (array[i] < min) {
            min = array[i];
        }
    }

    // media
    let average = sum / array.length;

    // Imprimir los resultados
    console.log(`Suma: ${sum}`);
    console.log(`Elemento más grande: ${max}`);
    console.log(`Elemento más pequeño: ${min}`);
    console.log(`Media: ${average}`);
    console.log('--------------------');
}

// Ejemplos 
doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
