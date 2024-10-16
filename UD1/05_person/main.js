// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)

let person = createPerson('John', 'Foo', 35, 'Macho', 'C/Abuelo 69')

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        years: years,
        gender: gender,
        address: address
    };
        
}

console.log(person);