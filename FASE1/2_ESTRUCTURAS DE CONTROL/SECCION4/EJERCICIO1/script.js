/**
 * Construir un programa que reciba un número entero positivo no superior a 1.000.000.000 e indique si
el número es primo. Por ejemplo: Dado el número 73 indicar true. Dado el número 35 indicar false
 */

let num = parseInt(prompt("Ingrese un número entero positivo no mayor a 1.000.000.000 "));

while(isNaN(num) || num > 1000000000 || num < 0){
    num = parseInt(prompt("Ingrese un número válido"));
}
let divisores = 0;
for (let i = 1; i <= num/2; i++) {
    if(num % i == 0) divisores++;
}

if(divisores == 1){
    alert(`El número ${num} ES PRIMO`)
    
} else {
    alert(`El número ${num} NO es primo`)
}

console.log(divisores);