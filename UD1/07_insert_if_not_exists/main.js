function insertIfNotExists(array, item, position) {
    // Verificacion de si el elemento exsite en la array
    if (array.indexOf(item) === -1) {
        if (position) {
            // se despalzan los elementos hacia la derecha y luego insertamos
            for (let i = array.length; i > 0; i--) {
                array[i] = array[i - 1];
            }
            array[0] = item;
        } else {
            // si la poscion es falsa lo agragamos al final
            array.push(item);
        }
    }
    return array;
}

// Ejemplos de uso
let array = ['pera', 'manzana'];

console.log(insertIfNotExists(array, 'pera', false));    // ['pera', 'manzana']
console.log(insertIfNotExists(array, 'melón', false));   // ['pera', 'manzana', 'melón']
console.log(insertIfNotExists(array, 'melocotón', true)); // ['melocotón', 'pera', 'manzana', 'melón']


