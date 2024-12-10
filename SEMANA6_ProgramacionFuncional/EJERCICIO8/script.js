/**
 * Usa every para verificar si todos los números en un array son positivos.
 */

let numeros1 = [1, 4, 6, 10, 11];
let numeros2 = [2, 5, -2, 4, 16];

const validarPositivos = (arreglo) => arreglo.every(num => num > 0);

function imprimirResultado(arreglo, callback) {
    console.log(`\n¿Todos los números son positivos?`);
    console.log(callback(arreglo));

}

imprimirResultado(numeros1, validarPositivos);
imprimirResultado(numeros2, validarPositivos);