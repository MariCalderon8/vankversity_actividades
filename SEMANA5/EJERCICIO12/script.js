/**
    * Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
    inscritos y permita actualizar sus calificaciones.

    ● Crear un arreglo estudiantes donde cada elemento sea un objeto con
    nombre, edad, matrícula y calificaciones (un arreglo de números).
    ● Crear una función calcularPromedio que reciba una matrícula y devuelva el
    promedio de calificaciones de ese estudiante.
    ● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
    arreglo de calificaciones, y actualice la información del estudiante
    correspondiente.
 */
let arregloEstudiantes = [
    {
        nombre: "Pepe",
        edad: 17,
        matricula: "1",
        calificaciones: [3.5, 4.8, 5, 2.2, 1]
    },
    {
        nombre: "Perenganito",
        edad: 18,
        matricula: "2",
        calificaciones: [1, 2.5, 4.8, 4, 5]
    },
    {
        nombre: "Juancho",
        edad: 20,
        matricula: "3",
        calificaciones: [5, 4.5, 4.8, 5, 4.9]
    },
    {
        nombre: "Fulanita",
        edad: 22,
        matricula: "4",
        calificaciones: [2.8, 3.2, 4.5, 5, 2.9]
    }
]

const buscarEstudiante = (matricula) => {
    let estudiante = arregloEstudiantes.find(est => est.matricula == matricula);
    if(!estudiante){
        throw new Error("Estudiante no encontrado");
    }
    return estudiante;
}

const calcularPromedio = (matricula) => {
    let estudiante = buscarEstudiante(matricula);
    let notas = estudiante.calificaciones;
    let promedio = 0;
    notas.forEach(element => promedio += element);
    promedio = promedio / notas.length;
    return promedio;
}
console.log(calcularPromedio("1"));

const actualizarCalificaciones = (matricula, calificaciones) => {
    let estudiante = buscarEstudiante(matricula);
    estudiante.calificaciones = calificaciones;
}


actualizarCalificaciones("4", [1, 2, 3, 4, 5]);
console.log(arregloEstudiantes);

