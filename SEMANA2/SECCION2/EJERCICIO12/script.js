// Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.

let n;

do {
    n = parseInt(prompt("Ingrese un numero natural"));
} while(isNaN(n) || n < 0);

let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i**2;
}

alert(`La suma de los cuadrados del 1 al ${n} es ${suma}`)
