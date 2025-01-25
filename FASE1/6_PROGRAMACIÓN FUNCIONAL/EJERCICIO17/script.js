/**
 * Usa reduce para eliminar duplicados de un array
    const numeros = [1, 2, 2, 3, 4, 4, 5];
 */

const numeros = [1, 2, 2, 3, 4, 4, 5];

const eliminarDuplicados = (arreglo) =>{
    return arreglo.reduce((nuevoArreglo, num) =>{
        if(!nuevoArreglo.includes(num)) nuevoArreglo.push(num);
        return nuevoArreglo;
    }, [])
}

function imprimirResultado(arreglo, callback) {
    console.log("Array sin elementos duplicados");
    console.log(callback(arreglo));
}

imprimirResultado(numeros, eliminarDuplicados);