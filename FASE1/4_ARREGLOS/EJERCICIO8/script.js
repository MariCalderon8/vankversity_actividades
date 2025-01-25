/**
 * Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo
 * recorra, imprimiendo cada uno de sus elementos.
 */

let arreglo = [2, 5, 7, 9];

const printArray = (arreglo) => arreglo.forEach(element => {
    console.log(element);
}); 

printArray(arreglo);