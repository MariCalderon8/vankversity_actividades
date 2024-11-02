// Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.

let n;
do {
    n = parseInt(prompt("Ingrese un numero natural"));
} while(isNaN(n) || n < 0);

let contador  = 1;
while (contador <= n) {
    console.log(contador);
    contador++;
}