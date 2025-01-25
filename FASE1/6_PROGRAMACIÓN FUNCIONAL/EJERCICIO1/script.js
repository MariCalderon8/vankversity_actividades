/**
 * Escribe una función sumar que reciba dos números y un callback. El callback debe
 * ser ejecutado con el resultado de la suma.
 */

//Funciones de orden superior
//función que recibe otra función como
//argumento

const sumar = (a, b) => a + b;

function sumaPrincipal(a, b, callback){
    let resultado = callback(a, b);
    console.log(`El resultado es: ${resultado}`);
}

sumaPrincipal(1, 6, sumar)