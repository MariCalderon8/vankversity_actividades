/**
 * Cree un programa que calcule el factorial de 5
 */

let factorial5 = 1 * 2 * 3 * 4 * 5;

console.log(`El factorial de 5 es ${factorial5}`);

// Usando ciclos
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

console.log(`(Usando ciclos)\nEl factorial de 5 es ${factorial}`);