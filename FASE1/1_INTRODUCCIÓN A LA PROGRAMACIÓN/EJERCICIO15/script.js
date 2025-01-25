/**
 * Cree un programa que calcule horas y minutos a partir de segundos.
 */

let segundos = parseInt(prompt("Ingrese la cantidad de segundos"));
while (isNaN(segundos) || segundos <= 0 ) {
    segundos = parseInt(prompt("Ingrese un valor válido"));
}

let minutos = segundos / 60;
let horas = segundos / 3600;

alert(`${segundos} segundos son:
    -${minutos} minutos
    -${horas} horas`)