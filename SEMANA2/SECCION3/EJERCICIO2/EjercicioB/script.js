/**
 * b. Determinar cuántas veces está la segunda secuencia dentro de la primera. Si no aparece debe imprimir 0.
 */

const cadenaConstante = "AGCTTAGCTAAGTCTAGGCTAG";

let secuencia = prompt("Ingrese una secuencia de ADN más pequeña:");

while (!/^[ATCG]*$/.test(secuencia)) {
    secuencia = prompt("La secuencia ingresada es inválida. Solo se permiten las bases A, T, C, G. Ingrese nuevamente:");
}

let count = 0;
let posicion = 0;

while ((posicion = cadenaConstante.indexOf(secuencia, posicion)) !== -1) {
    count++;
    posicion++; 
}

alert(count); 
