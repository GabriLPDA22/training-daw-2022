'use strict';

let x = 10;
let test = 5;

console.log('valor de x ' + x);

function shadow() {
    let x = 20;  // Usamos let en lugar de var

    console.log('valor de x ' + x);
    console.log('valor de test ' + test);
}

shadow();
console.log('valor de x ' + x);

function scopes() {
    let i = 0;

    for (let j = 0; j < 10; j++) {
        i = j;
        console.log('i ' + i);
    }

    console.log(i);  // i tiene valor 9 aquí porque la reasignación persiste
}

scopes();
