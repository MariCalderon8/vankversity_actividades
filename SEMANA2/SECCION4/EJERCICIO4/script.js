/**
 * Construir un programa que reciba tres números de un dígito y los combine mostrando todos los posibles
    números pares que se pueden construir con estos tres.
 */

let num1 = parseInt(prompt("Ingrese el primer número"));
while(isNaN(num1) || num1 < 0 || num1 > 9){
    num1 = parseInt(prompt("Ingrese un número válido"));
}

let num2 = parseInt(prompt("Ingrese el segundo numero"));
while(isNaN(num2) || num2 < 0 || num2 > 9){
    num2 = parseInt(prompt("Ingrese un número válido"));
}

let num3 = parseInt(prompt("Ingrese el tercer números"));
while(isNaN(num3) || num3 < 0 || num3 > 9){
    num3 = parseInt(prompt("Ingrese un número válido"));
}

console.log("Números pares posibles:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j !== i) {
            for (let k = 0; k < 3; k++) {
                if (k !== i && k !== j) {

                    let num = 0;
                    if (i === 0) num += num1 * 100;
                    if (i === 1) num += num2 * 100;
                    if (i === 2) num += num3 * 100;

                    if (j === 0) num += num1 * 10;
                    if (j === 1) num += num2 * 10;
                    if (j === 2) num += num3 * 10;

                    if (k === 0) num += num1;
                    if (k === 1) num += num2;
                    if (k === 2) num += num3;

                    if (num % 2 === 0) {
                        console.log(num);
                    }
                }
            }
        }
    }
}