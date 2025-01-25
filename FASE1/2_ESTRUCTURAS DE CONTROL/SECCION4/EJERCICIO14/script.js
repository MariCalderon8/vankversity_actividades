/**
 * Se debe informar si dos números son números amigos. “Dos números se consideran amigos si son
    positivos y la suma de los divisores de uno es igual al otro. Se debe considerar que la suma de los
    divisores no debe incluir al número evaluado. Un ejemplo de números amigos son el 220 y el 284:
    Los divisores del 220 son: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110, y suman 284;
    Los divisores del 284 son 1, 2, 4, 71 y 142, y suman 220. ”
 */

let num1 = parseInt(prompt("Ingrese el primer número positivo"));
while (isNaN(num1) || num1 <= 0) {
    num1 = parseInt(prompt("Ingrese un número válido positivo"));
}

let num2 = parseInt(prompt("Ingrese el segundo número positivo"));
while (isNaN(num2) || num2 <= 0) {
    num2 = parseInt(prompt("Ingrese un número válido positivo"));
}

let sumaDivisoresNum1 = 0;
let sumaDivisoresNum2 = 0;

for (let i = 1; i < num1; i++) {
    if (num1 % i === 0) {
        sumaDivisoresNum1 += i;
    }
}

for (let i = 1; i < num2; i++) {
    if (num2 % i === 0) {
        sumaDivisoresNum2 += i;
    }
}

if (sumaDivisoresNum1 === num2 && sumaDivisoresNum2 === num1) {
    alert(`${num1} y ${num2} son números amigos.`);
} else {
    alert(`${num1} y ${num2} NO son números amigos.`);
}