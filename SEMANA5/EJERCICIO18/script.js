/**
 * Cree un programa el cual ayude a gestionar las reservas de habitaciones de un hotel.
    Crear un arreglo habitaciones donde cada habitación tenga numero, tipo(Suite,
    Doble, Normal), disponible (booleano), y reservas (arreglo de objetos con cliente y
    diasReservados).
    Crear una función reservarHabitación que permita reservar una habitación si está
    disponible.
    Crear una función cancelarReserva para cancelar la reserva de un cliente específico.
    Crear una función habitacionesDisponibles que devuelva un listado de habitaciones
    disponibles por tipo.
 */

let habitaciones = [
    { numero: 101, tipo: "suite", disponible: true, reservas: [] },
    { numero: 102, tipo: "doble", disponible: true, reservas: [] },
    { numero: 103, tipo: "normal", disponible: true, reservas: [] },
    { numero: 104, tipo: "suite", disponible: true, reservas: [] },
    { numero: 105, tipo: "doble", disponible: true, reservas: [] }
];

const buscarHabitacion = (numHabitacion) => {
    for(let habitacion of habitaciones){
        if (habitacion.numero == numHabitacion) return habitacion;
    }
    return null;
}

const crearReserva = (numHabitacion, documento, nombre, diasReservados) => {
    let habitacion = buscarHabitacion(numHabitacion);
    if(habitacion){
        habitacion.reservas.push({
            documento: documento,
            nombre: nombre,
            diasReservados: diasReservados
        });
        habitacion.disponible = false;
    } else {
        alert("La habitación no existe")
    }
}

const eliminarReserva = (documentoCliente) => {
    habitaciones.forEach(habitacion =>{
        let indiceReserva = habitacion.reservas.findIndex(reserva => reserva.documento == documentoCliente);
        if(indiceReserva != -1){
            habitacion.reservas.splice(indiceReserva, 1);
            habitacion.disponible = true;
            alert("Reseva eliminada correctamente");
            return;
        }
    })
    alert("Reserva no encontrada");
}

const habitacionesDisponiblesPorTipo = (tipo) =>{
    let habitacionesDisponibles = ""
    for(let habitacion of habitaciones){
        habitacionesDisponibles += `Habitación ${habitacion.numero}\n`
    }
    if(habitacionesDisponibles == ""){
        alert("NO HAY HABITACIONES DISPONIBLES");
    } else {
        alert("HABITACIONES DISPONIBLES\n" + habitacionesDisponibles);
    }
}

