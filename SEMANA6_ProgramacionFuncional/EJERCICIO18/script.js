/**
 * Usa reduce para agrupar un arreglo de números en un objeto con las claves pares e
impares, donde cada clave contiene un arreglo con los números correspondientes.
Ejemplo: { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }
 */

let numeros = [2, 5, 7, 8, 12, 14, 18, 21, 23];

const agruparParesImpares = (arreglo) =>{
    return arreglo.reduce((nuevoObjeto, num) => {
        if(num % 2 == 0){
            nuevoObjeto.pares.push(num);
        } else {
            nuevoObjeto.impares.push(num);
        }
        return nuevoObjeto;
    }, {pares: [], impares: []})
}

function imprimirResultado(arreglo, callback){
    console.log("Numeros pares e impares agrupados");
    console.log(callback(arreglo));
}

imprimirResultado(numeros, agruparParesImpares)