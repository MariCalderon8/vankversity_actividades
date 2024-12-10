/**
 * Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
    suma y su resta.
 */

let num1 = parseInt(prompt("Ingrese el número 1"));
let num2 = parseInt(prompt("Ingrese el número 2"));

alert(`
    La suma de los números es ${num1 + num2}
    La resta de los números es ${num1 - num2}
    El producto de los números es ${num1 * num2}
    El módulo de los números es ${num1 % num2}
    El cociente de los número es ${num1 / num2}`)

