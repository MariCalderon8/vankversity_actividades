/**
 * 1. Cristiana, una joven investigadora del LabSADN, necesita un conjunto de programas que le ayuden a
    generar e imprimir cadenas de ADN de una longitud indicada por ella y además que dichas cadenas
    cumplan ciertas condiciones. Cada uno de los siguientes puntos debe ser un programa diferente.

    a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
    según se indique al momento de ejecutar el programa.
 */

let longitud = parseInt(prompt("Ingrese la longitud de la cadena de ADN"));
while (isNaN(longitud) || longitud <= 0) {
    longitud = parseInt(prompt("Ingrese un número válido para la longitud de la cadena"));
}

let base = prompt("Ingrese la base para la cadena (A, T, C, G)").toUpperCase();

while (base != "A" && base != "T" && base != "C" && base != "G") {
    base = prompt("Ingrese una base válida (A, T, C, G)").toUpperCase();
}

let cadenaADN = "";
for (let i = 0; i < longitud; i++) {
    cadenaADN += base; 
}

alert(`La cadena de ADN generada es: ${cadenaADN}`);