/**
 * Escriba una función que reciba el lado de un cubo y retorne su volumen.
 */

let lado = parseFloat(prompt("Ingrese el lado del cubo"));

const calcularVolumenCubo = (lado) => lado**3;

alert(`El volumen del cubo es: ${calcularVolumenCubo(lado)}`);