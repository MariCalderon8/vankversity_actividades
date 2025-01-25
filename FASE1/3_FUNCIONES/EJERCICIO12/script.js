/**
 * Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
 * informando si el estudiante aprobó o no la materia, para que la materia se de como
 * aprobada el promedio del estudiante debe ser mayor o igual a 3,0.
 */

let nota1 = parseFloat(prompt(`Ingrese la nota 1`));
let nota2 = parseFloat(prompt(`Ingrese la nota 2`));
let nota3 = parseFloat(prompt(`Ingrese la nota 3`));
let nota4 = parseFloat(prompt(`Ingrese la nota 4`));
let nota5 = parseFloat(prompt(`Ingrese la nota 5`));


function generarReporte(n1, n2, n3, n4, n5){
    let promedio = 0;
    
    promedio = (n1 + n2 + n3 + n4 + n5) / 5
    if(promedio >= 3){
        return `El promedio es: ${promedio}. El estudiante aprobó la materia`
    } else{
        return `El promedio es: ${promedio}. El estudiante a reprobó la materia`
    }
}

alert(generarReporte(nota1, nota2, nota3, nota4, nota5));