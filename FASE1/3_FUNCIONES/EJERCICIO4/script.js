/**
 * Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.
 */

let num = parseInt(prompt("Ingresa un numero"));

function mostrarNumerosHastaN(num){
    let resultado = "";
    for (let i = 0; i < num; i++) {
        resultado += (i+1) + ", ";
    }
    return resultado;
}

let resultado = mostrarNumerosHastaN(num);
alert(`Los numeros de 1 hasta ${num} son: ${resultado}`);