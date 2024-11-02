/**
 * Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
 * funciones.
 */
let cantidadEstudiantes
do {
    cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
} while(isNaN(cantidadEstudiantes) || cantidadEstudiantes < 0);

for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante ${i + 1}`));
    let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${i + 1}`));
    let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${i + 1}`));
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El promedio del estudiante ${i + 1} es ${promedio}`);
}
