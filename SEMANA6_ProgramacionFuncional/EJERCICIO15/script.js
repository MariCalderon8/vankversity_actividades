/**
 * Usa reduce para contar cuántas veces aparece cada palabra en un array y devolver
    un objeto con las frecuencias.
    const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
    console.log(contarPalabras(palabras)); // { hola: 3, mundo: 2, javascript: 1 }
 */

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const contarPalabras = (arreglo) =>{
    return arreglo.reduce((objetoFinal, palabra) =>{
        if(!objetoFinal[palabra]){
            objetoFinal[palabra] = 1;
        } else {
            objetoFinal[palabra] = objetoFinal[palabra] + 1;
        }
        return objetoFinal;
    }, {})
}

function imprimirResultado(arreglo, callback) {
    console.log(callback(arreglo));
}

imprimirResultado(palabras, contarPalabras)