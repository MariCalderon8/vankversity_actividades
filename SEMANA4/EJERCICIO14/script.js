/**
 * Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
 * ordenado de menor a mayor según el valor de tales elementos.
 */


const sortArray = (array) => array.sort((a, b) => a - b);

let numeros = [3, 4, 21, 9, 2, 102, 42, 5]
console.log(sortArray(numeros));