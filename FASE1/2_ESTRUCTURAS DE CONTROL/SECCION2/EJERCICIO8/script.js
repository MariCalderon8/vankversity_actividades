// Cree un programa que muestre los números impares entre 1 y n.

let n;
do {
    n = parseInt(prompt("Ingrese un numero natural"));
} while(isNaN(n) || n < 0);

for (let i = 1; i <= n; i++) {
    if( i % 2 == 1 ) {
        console.log(i);
    }   
}
