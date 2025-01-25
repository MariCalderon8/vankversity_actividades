/**
 * Construya un programa que dado un número n, calcule la serie
 */

let num = parseInt(prompt("Ingrese un número entero positivo"));
while(isNaN(num) || num < 0){
    num = parseInt(prompt("Ingrese un número válido"));
}

let x = 0;
let contador = 0;
for (let i = 2; i < num; i++) {
    if(contador == 2){
        x -= 1 / i;
        contador = 0;
        console.log(`-1/${i}`);
    } else {
        x += 1 / i;
        console.log(`1/${i}`);
        contador++;
    }
}

alert(`El resultado de la serie es ${x}`)