/**
 * Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados
 */

let dado1 = Math.floor(Math.random()*6)+1;
let dado2 = Math.floor(Math.random()*6)+1;

alert(`El valor obtenido en el primer dado es ${dado1} y en el segundo dado es ${dado2}. La suma de los dos lanzamientos es ${dado1 + dado2}`);