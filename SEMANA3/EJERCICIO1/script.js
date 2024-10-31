/**
 * Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y
 * retorne su área.
 */

let base = parseFloat(prompt("Ingrese la base del rectángulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));

const calcularAreaRectangulo = (base, altura) => base * altura;

alert("El area del rectángulo es: " + calcularAreaRectangulo(base,altura))