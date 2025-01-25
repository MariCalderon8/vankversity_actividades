/**
 * Usa map para convertir todas las cadenas en un array a mayúsculas.
 * console.log(convertirAMayusculas(["hola", "mundo"]));
 */

let cadenas = ["¡hola", "mundo!", "Hello", "world!"];

const convertirMayus = (arreglo) =>{
    let arregloMayus = arreglo.map(
        cadena => cadena.toUpperCase()
    );
    return arregloMayus;
}

function imprimirResultado(arreglo, callback) {
    console.log(`Arreglo en mayúscula:\n ${callback(arreglo)}`);
}

imprimirResultado(cadenas, convertirMayus)
