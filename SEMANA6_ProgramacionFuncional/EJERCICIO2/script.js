/**
 * Crea una función aplicarOperacion que reciba un número y un callback. La función
 * debe ejecutar el callback pasándole el número.
 */

const elevarCuadrado = (a) => a**2;

function aplicarOperacion(numero, callback){
    let transformada = callback(numero);
    return transformada;
}

console.log(`Resultado: ${aplicarOperacion(5, elevarCuadrado)}`);