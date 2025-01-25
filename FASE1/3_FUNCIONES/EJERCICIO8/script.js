/**
 * Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
 * la primera letra del nombre.
 */

let nombre = prompt("Ingrese un nombre");

const obtenerPrimeraLetra = (nombre) => nombre.charAt(0);

alert(`La primera letra del nombre ${nombre} es: ${obtenerPrimeraLetra(nombre)}`);