function hello(nombre, apellidos, edad) {
    return `Hola ${nombre} ${apellidos}, tienes ${edad} años de edad`;
}

// Prueba 1
let result = hello('John', 'Anderton', 35);
console.log(result); 
if (result !== "Hola John Anderton, tienes 35 años de edad") {
    console.log('test fail');
} else {
    console.log('Test OK');
}


