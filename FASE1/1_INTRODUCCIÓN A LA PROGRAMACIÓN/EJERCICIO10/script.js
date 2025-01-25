/**
 * Cree un programa que tome un número real e imprima su valor absoluto.
 */

let numero = parseFloat(prompt("Ingrese un número real"));

while(isNaN(numero)){
    numero = parseFloat(prompt("El número no es válido. Ingrese un valor válido"));
}

let valorAbsoluto = Math.abs(numero);
alert(`El valor absoluto de ${numero} es ${valorAbsoluto}`);