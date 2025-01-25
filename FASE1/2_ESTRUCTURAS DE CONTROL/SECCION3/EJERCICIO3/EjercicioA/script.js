/**
 * 3. Finalmente la directora del laboratorio quiere un programa que:
 * 
 * a. Dada una cadena ingresada como constante en el programa, mostrarla en formato de frecuencia de
 * bases consecutivas, es decir si la secuencia es "AAAGTCCAGGTTTT" la salida debe ser
 * "A3,G1,T1,C2,A1,G2,T4"
 */

let secuencia = prompt("Ingrese una cadena de ADN más pequeña:");

while (!/^[ATCG]*$/.test(secuencia)) {
    secuencia = prompt("La cadena ingresada es inválida. Solo se permiten las bases A, T, C, G. Ingrese nuevamente:");
}

let resultado = "";
let contador = 1;

for (let i = 1; i <= secuencia.length; i++) {
    if (secuencia[i] === secuencia[i - 1]) {
        contador++;
    } else {
        resultado += secuencia[i - 1] + contador;

        if (i < secuencia.length) {
            resultado += ",";
        }

        contador = 1;
    }
}

alert(resultado);