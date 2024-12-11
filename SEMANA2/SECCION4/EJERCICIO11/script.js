/**
 * Calcular el MCD de dos números.
 */

let num1 = parseInt(prompt("Ingrese el primer número"));
while (isNaN(num1)) {
    num1 = parseInt(prompt("Ingrese un número válido"));
}

let num2 = parseInt(prompt("Ingrese el segundo número"));
while (isNaN(num2)) {
    num2 = parseInt(prompt("Ingrese un número válido"));
}

let a = num1;
let b = num2;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

alert(`El máximo común divisor de ${num1} y ${num2} es ${a}`);