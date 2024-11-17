/**
 * Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de
 * índice 2 por true, cambiar el elemento de índice 3 por false.
 */

let h = [true, true, false, true, false];

h.splice(2, 1, true);
h.splice(3, 1, false);
console.log(h);