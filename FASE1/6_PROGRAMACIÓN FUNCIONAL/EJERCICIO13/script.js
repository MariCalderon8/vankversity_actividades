/**
 * Usa reduce para aplanar un array de arrays en uno solo nivel.
    const arrays = [[1, 2], [3, 4], [5, 6]];
    console.log(plano); // [1, 2, 3, 4, 5, 6]
 */

const arrays = [[1, 2], [3, 4], [5, 6]];

const aplanarArray = (arreglo) =>{
    return arreglo.reduce((nuevoArreglo, subarreglo) =>{
        subarreglo.forEach(num => {
            nuevoArreglo.push(num)
        });
        return nuevoArreglo;
    }, [])
}

function imprimirResultado(arreglo, callback) {
    console.log(`Arreglo original:`);
    console.log(arreglo);
    console.log(`Nuevo arreglo en una dimensión`);
    console.log(callback(arreglo));
}

imprimirResultado(arrays, aplanarArray)

