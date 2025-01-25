/**
 * Usa reduce para agrupar palabras en un objeto según su longitud.
const palabras = ["hola", "adiós", "sol", "estrella"];
console.log(agrupado); // {4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"]}
 */

const palabras = ["hola", "cama", "camiseta", "adiós", "sol", "estrella"];

const agruparPorLongitud = (arreglo) =>{
    return arreglo.reduce((acc, word) =>{
        let longitud = word.length;
        if(!acc[longitud]){
            acc[longitud] = []
        }
        acc[longitud].push(word);
        return acc;
    }, {}) //Valor inicial (objeto vacío)
}

function imprimirResultado(arreglo, callback) {
    console.log(callback(arreglo));
}

imprimirResultado(palabras, agruparPorLongitud)