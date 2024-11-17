/**
 * Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un
condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las
veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el
nombre Maria.
 */

let array = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let counter = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i] == "Maria") counter++;    
}

console.log(`El nombre Maria está ${counter} veces en el arreglo`);