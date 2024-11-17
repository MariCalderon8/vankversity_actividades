/**
 * Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para
mostrar la suma de los cuadrados de sus elementos.
 */

let array = [-2, 8, 99, 1, 7];
let counter = 0;

array.forEach(element => counter += element**2);
console.log(`La suma de los elementos del array es ${counter}`);