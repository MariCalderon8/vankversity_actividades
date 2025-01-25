/**
 * Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para
mostrar la suma de sus elementos.
 */

let array = [15, 7, 9, 12, 1];
let counter = 0;

array.forEach(element => counter += element);

console.log(`La suma de los elementos del array es ${counter}`);