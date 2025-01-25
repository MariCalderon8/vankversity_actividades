/**
 * Escriba un programa que calcule si un estudiante aprueba o reprueba con base en
    tres notas. Usa tres funciones:
    ● calcularPromedio(notas): calcula el promedio de las tres notas.
    ● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
    ● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.
 */
// Pendiente de revision

let nota1 = parseFloat(prompt("Ingrese la nota 1"));
let nota2 = parseFloat(prompt("Ingrese la nota 2"));
let nota3 = parseFloat(prompt("Ingrese la nota 3"));

const calcularPromedio = (n1, n2, n3) => (n1 + n2 + n3) / 3;

const esAprobado = (promedio) =>  promedio >= 6;

const mostrarResultado = (aprobado) => {
    if(aprobado){
        return `El estudiante aprobó :D`;
    } else {
        return `El estudiante reprobó T-T)`;
    }
}
let promedio = calcularPromedio(nota1, nota2, nota3);
alert(`${mostrarResultado(esAprobado(promedio))} con un promedio de ${promedio}`);