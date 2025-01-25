/**
 * Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
 * esa cantidad.
 */

let cantidad = parseFloat(prompt("Ingrese una cantidad"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea calcular de la cantidad ingresada"));

let resultado = cantidad * (porcentaje / 100);

alert(`El ${porcentaje}% de ${cantidad} es ${resultado}`);