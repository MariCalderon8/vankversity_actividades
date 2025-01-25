/**
 * Cree un programa que genere un número aleatorio dentro de un rango específico.
 */

let limiteSuperior = 2;
let limiteInferior = 30;

let random = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
console.log(random);