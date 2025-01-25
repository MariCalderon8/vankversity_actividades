/**
 * Usa reduce para combinar las palabras de un array en una sola oración.
 */

let cadena = ["P", "a", "n", "c", "h", "o", " ", "e", "l", " ", "f", "r", "i", "j", "ó", "l", " ", "s", "a", "l", "t", "a", "r", "í", "n"];

const concatenarArreglo = (arreglo) => {
    return arreglo.reduce(
        (word, current) => word + current
    )
}

function imprimirResultado(arreglo, callback) {
    console.log(callback(arreglo));
}

imprimirResultado(cadena, concatenarArreglo);