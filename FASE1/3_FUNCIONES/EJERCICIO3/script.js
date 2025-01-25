/**
 * Escriba una función que tenga como parámetro un nombre y retorne la cadena 
 * “Hola Juan”, por ejemplo si el nombre pasado es Juan.
 */

let nombre = prompt("Ingresa tu nombre");

const saludar = (nombre) => `Hola, ${nombre}`;

alert(saludar(nombre));