/**
 * Haga un programa que diga si un número es o no perfecto. Un número N es perfecto si la suma de
    sus divisores (excluido el propio N) es N. por ejemplo 28 es perfecto, pues sus divisores (excluido el
    28) son 1,2,4,7 y 14 su suma da 28.
 */


let num = parseInt(prompt("Ingrese un número entero positivo"));
while (isNaN(num) || num < 0) {
    num = parseInt(prompt("Ingrese un número válido"));
}

let suma = 0;
for (let i = 1; i <= num / 2; i++) {
    if(num % i == 0) suma += i;
}

if (suma == num) {
    alert(`El número ${num} es PERFECTO`);
} else {
    alert(`El número ${num} NO es PERFECTO`);
}