/**
 * Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente.
 */

let nombres = ["Pepe", "Juancho", "Ana", "Fulanito", "Gloria"];

const ordenarConvertirMayus = (arreglo) =>{
    let nombresOrdenados = arreglo.map(
        nombre => nombre.toUpperCase()
    ).sort();
    return nombresOrdenados;
}

function imprimirResultado(arreglo, callback){
    console.log(`Arreglo ordeanado:\n${callback(arreglo)}`);
}

imprimirResultado(nombres, ordenarConvertirMayus)
