/**
 * Escriba un algoritmo que devuelva los primeros n términos de la siguiente serie:
 * -2 , 6, -8, 12, -14, 18, ...
 */

let num = parseInt(prompt("Ingrese un número entero positivo"));
while(isNaN(num) || num < 0){
    num = parseInt(prompt("Ingrese un número válido"));
}

let contador1 = 4;
let contador2 = 0;
for (let i = 1; i <= num; i++) {
    if(i % 2 == 0) {
        contador2 += 6;
        console.log(contador2);

    } else {
        contador1 -= 6;
        console.log(contador1);
    }
}