/**
 * 13. Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
    requiere un programa donde el usuario pueda consultar el día de su cita mediante su
    documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
    mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
    programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
    fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
    el cambio solicitado ha sido exitoso.
 */

let citas = [
    { usuario: "Pepe", documento: "123", dia: "17 de diciembre", hora: "05:00pm" },
    { usuario: "Perenganito", documento: "456", dia: "10 de enero", hora: "07:00am" },
    { usuario: "Juancho", documento: "789", dia: "27 de noviembre", hora: "03:00pm" },
    { usuario: "Fulanita", documento: "101", dia: "7 de diciembre", hora: "09:00am" },
];
    

const buscarCita = (documento) => {
    let cita = citas.find(user => user.documento == documento);
    if(!cita){
        alert('Usuario no encontrado')
        throw new Error("Usuario no encontrado");
    }
    return cita;
}

const mostrarCita = (documento) => {
    let cita = buscarCita(documento);
    alert(`Estimado usuario ${cita.usuario} su cita está programada para el dia ${cita.dia} a las ${cita.hora}`);
    let respuesta = prompt(`Desea cambiar la hora y/o fecha de la cita? (S/N)`);
    respuesta = respuesta.toLocaleLowerCase();
    if(respuesta == "s") {
        actualizarCita(cita)
    } else if (respuesta == "n"){
        alert('Que tenga un buen día :D')
    } else {
        alert('Respuesta no válida')
    }
}

const actualizarCita = (cita) =>{
    let respuesta = prompt('(D) para cambiar el dia \n(H) para cambiar la hora\n(A) para cambiar ambas');
    respuesta = respuesta.toUpperCase();
    let nuevoDia = '';
    let nuevaHora = '';
    switch (respuesta) {
        case "D":
            nuevoDia = prompt('Ingrese el nuevo dia');
            cita.dia = nuevoDia;
            alert('Fecha actualizada')

            break;
        case "H":
            nuevaHora = prompt('Ingrese la nueva hora');
            cita.hora = nuevaHora;
            alert('Hora actualizada')

            break;
        case "A":
            nuevoDia = prompt('Ingrese la nueva fecha');
            cita.dia = nuevoDia;
            nuevaHora = prompt('Ingrese la nueva hora');
            cita.hora = nuevaHora;
            alert('Cita actualizada')

            break;
        default:
            alert('Respuesta no válida')
            return;
    }
    alert(`Usuario ${cita.usuario} su cita quedó reprogramada para el dia ${cita.dia} a las ${cita.hora}`);

}

let documento = prompt('Ingrese su documento para consultar la cita')
mostrarCita(documento);