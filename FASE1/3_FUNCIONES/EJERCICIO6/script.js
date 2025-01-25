/**
 * Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
 * True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
 * contrario.
 */

let caracter = prompt("Ingrese un caracter");

function esVocal(caracter){
    caracter = caracter.toLowerCase();
    return caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u";
}

alert(esVocal(caracter));