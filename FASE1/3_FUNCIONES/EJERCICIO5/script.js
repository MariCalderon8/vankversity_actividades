/**
 * Escriba una función que reciba un número n como parámetro y genere su factorial.
 */

let num = parseInt(prompt("Ingrese un numero"));

function generarFactorial(num){
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

alert(`El factorial de ${num} es: ${generarFactorial(num)}`);