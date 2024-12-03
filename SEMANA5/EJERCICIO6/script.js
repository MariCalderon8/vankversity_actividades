/**
 * Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave
 * números.
 */

let objeto = { numeros: [45, 78, 22, 89, 8] };

objeto.numeros.forEach(num => {
    console.log(num);
});