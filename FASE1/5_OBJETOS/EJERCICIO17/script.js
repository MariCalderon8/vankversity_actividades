/**
 * Crear un sistema para administrar empleados y sus horas trabajadas.Crear un arreglo
    empleados donde cada empleado tenga nombre, id, y horasTrabajadas (un arreglo de
    horas).Crear una función agregarHoras que permita agregar horas trabajadas a un
    empleado.
    Crear una función calcularPago que calcule el salario semanal basado en una tarifa
    fija.
    Crear una función empleadosConHorasExtras que devuelva los empleados que
    trabajaron más de 40 horas en una semana.
 */

let empleados = [];
let tarifa = 8000;

let menu = "Seleccione alguna de las siguientes opciones:\n"+
    "1) Agregar un nuevo empleado\n" +
    "2) Eliminar empleado\n" +
    "3) Agregar horas a un empleado\n" +
    "4) Calcular salario empleado \n" +
    "5) Mostrar empleados \n" +
    "6) Empleados con horas extras\n" +
    "7) Salir \n";


const buscarEmpleado = (documento) =>{
    for (const empleado of empleados) {
        if (empleado.documento === documento) {
            return empleado;
        }
    }
    return null; 
}


const agregarEmpleado = (documento, nombre, edad) => {
    if (buscarEmpleado(documento) == null){
        empleados.push({
            documento: documento,
            nombre: nombre,
            edad: edad,
            horasTrabajadas: [],
        })
        alert("Empleado registrado correctamente");
        return;
    }
    alert(`El empleado con documento ${documento} ya se encuentra registrado`);
}

const agregarHorasEmpleado = (documento, horas) => {
    let empleado = buscarEmpleado(documento);
    if(empleado){
        empleado.horasTrabajadas.push(horas)
        alert("Horas agregadas con éxito")
    } else {
        alert("Empleado no encontrado");
    }
}

const eliminarEmpleado = (documento) =>{
    let empleado = buscarEmpleado(documento);
    if(empleado){
        empleados.splice(empleados.indexOf(empleado), 1);
        alert("Empleado retirado con éxito")
    } else {
        alert("Empleado no encontrado");
    }
}

const calcularHorasTrabajadas = (arregloHoras) => arregloHoras.reduce((acc, hora) => acc + hora, 0);

const calcularSalario = (documento) => {
    let empleado = buscarEmpleado(documento);
    if (empleado) {
        let totalHoras = calcularHorasTrabajadas(empleado.horasTrabajadas);
        let salario = totalHoras * tarifa;

        if (totalHoras > 0) {
            alert(`El empleado ${documento} trabajó un total de ${totalHoras} horas. Su salario es: $${salario}`);
        } else {
            alert(`El empleado ${documento} no tiene horas trabajadas.`);
        }
    } else {
        alert("Empleado no encontrado");
    }
};

const mostrarEmpleado = (empleado) => {
    return `
    Documento: ${empleado.documento}
    Nombre: ${empleado.nombre}
    Edad: ${empleado.edad}
    Horas trabajadas: ${calcularHorasTrabajadas(empleado.horasTrabajadas)}
    -------------------------------\n`
}

const mostrarEmpleados = () =>{
    let totalEmpleados = ""
    if(empleados.length != 0){
        totalEmpleados = "TOTAL DE EMPLEADOS\n";
        for(const empleado of empleados){
            totalEmpleados += mostrarEmpleado(empleado);
        }
    } else {
        totalEmpleados = "NO HAY EMPLEADOS REGISTRADOS";
    }
    alert(totalEmpleados);
}

const empleadosConHorasExtras = () => {
    let empleadosHorasExtras = "EMPLEADOS CON HORAS EXTRAS\n";
    empleados.forEach(empleado => {
        if(calcularHorasTrabajadas(empleado.horasTrabajadas) >= 40){
            empleadosHorasExtras += mostrarEmpleado(empleado);
        }
    });

    if(empleadosHorasExtras == "EMPLEADOS CON HORAS EXTRAS\n"){
        alert("NO HAY EMPLEADOS CON HORAS EXTRAS");
    } else {
        alert(empleadosHorasExtras);
    }
    
}

let continuar = true;

while (continuar) {
    let answer = parseInt(prompt(menu));
    let documento;
    let nombre;
    let edad;
    let horas = 0;
    switch(answer){
        case 1:
            documento = prompt("Ingrese el documento del empleado");
            nombre = prompt("Ingrese el nombre del empleado");
            do {
                edad = parseInt(prompt("Ingrese la edad del empleado"));
            } while (edad < 18);
            agregarEmpleado(documento, nombre, edad)
            break;

        case 2:
            documento = prompt("Ingrese el documento del empleado que desea eliminar");
            eliminarEmpleado(documento);
            break;
        case 3:
            documento = prompt("Ingrese el documento del empleado del que desea calcular el salario");
            while (horas <= 0) {
                horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas"))
            }
            agregarHorasEmpleado(documento, horas);
            break;
        case 4:
            documento = prompt("Ingrese el documento del empleado del que desea calcular el salario");
            calcularSalario(documento);
            break;
        case 5:
            mostrarEmpleados()
            break;
        case 6:
            empleadosConHorasExtras();
            break;
        case 7:
            continuar = false;
            alert("Adiós :D");
            break;
        default:
            alert("Respuesta no válida");
            break;
    }
}