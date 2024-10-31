/**
 * Escriba una función la cual reciba como parámetro una cadena y genere como
 * retorno la misma cadena pero con todos su contenido en mayúscula.
 */

let cadena = prompt("Ingrese el contenido de la cadena");

const generarCadenaMayuscula = (cadena) => cadena.toUpperCase();

alert(generarCadenaMayuscula(cadena));