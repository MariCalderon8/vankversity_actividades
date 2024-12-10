/**
 * Crea una función que reciba un array de números y aplique diferentes operaciones
(multiplicar, dividir, sumar) según condiciones definidas en un callback.
 */
const numeros = [2, 3, 4, 5, 6, 7, 9];

const operaciones = (operacion, numero) =>{
    switch (operacion) {
        case 1:
            return numero + 5;
        case 2:
            return numero * 10
        case 3:
            return numero / 2
        default:
            throw new Error("Operación no definida")
    }
}

const aplicarOperacion = (arreglo, operacion, callback) =>{
    return arreglo.map(num => callback(operacion, num));
}

let resultadosSuma = aplicarOperacion(numeros, 1, operaciones);
console.log(resultadosSuma);

let resultadosMultiplicacion = aplicarOperacion(numeros, 2, operaciones);
console.log(resultadosMultiplicacion);

let resultadosDivision = aplicarOperacion(numeros, 3, operaciones);
console.log(resultadosDivision);

let noDefinido = aplicarOperacion(numeros, 5, operaciones);
