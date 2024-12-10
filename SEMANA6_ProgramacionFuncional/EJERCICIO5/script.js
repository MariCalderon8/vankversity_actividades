/**
 * Usa map para duplicar los números de un array y luego filter para obtener solo los
 * mayores de 10.
 */

let numeros = [2, 4, 6, 3, 10, 8]

const mayores10Duplicados = (arreglo)  =>{
    let numerosFiltrados = arreglo.map(
        numero => numero * 2
    ).filter(numero => numero > 10);
    return numerosFiltrados;
}

function imprimirResultado (arreglo, callback){
    console.log(`Numeros filtrados:\n${callback(arreglo)}`);
}

imprimirResultado(numeros, mayores10Duplicados)
