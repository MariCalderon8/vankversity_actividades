//Cree un programa que calcula la suma de los primeros n números naturales.

let n;

do {
    n = parseInt(prompt("Ingrese un numero natural"));
} while(isNaN(n) || n < 0);

let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

alert(`La suma de los ${n} numeros naturales es ${suma}`);
