/**
 * Cree un programa el cual ayude a gestionar el registro de vehículos en un parqueadero.
    Cree un arreglo el cual contenga objetos de tipo vehiculo en su interior, estos vehículos
    tendrán como propiedad, marca, placa y hora de entrada, El programa debe brinda la
    posibilidad de ingresar nuevos vehiculos al arreglo, y eliminarlos, adicionalmente dede
    realizar una función la cual determine el tiempo que paso el vehiculo estacionado y el valor
    que debe pagar en el parqueadero, el valor de la hora tiene un costo de 2.500 pesos.
 */

let parqueadero = [];

let menu = "Seleccione alguna de las siguientes opciones:\n"+
    "1) Agregar un nuevo vehiculo\n" +
    "2) Retirar vehiculo \n" +
    "3) Mostrar vehiculos\n" +
    "4) Salir \n";


const buscarVehiculo = (placa) =>{
    for (const vehiculo of parqueadero) {
        if (vehiculo.placa === placa.toUpperCase()) {
            return vehiculo;
        }
    }
    return null; 
}

const validarFormatoPlaca = (placa) => {
    const regex = /^[A-Z]{3}[0-9]{3,4}$/i;
    if(regex.test(placa)){
        return true;
    } else {
        alert("El formato de la placa no es válido");
        return false;
    }
}


const agregarVehiculo = (propiedad, marca, placa) => {
    if (buscarVehiculo(placa) == null){
        parqueadero.push({
            propiedad: propiedad,
            marca: marca,
            placa: placa,
            horaEntrada: new Date(),
        })
        alert("Vehiculo ingresado correctamente");
        return;
    }
    alert("El vehículo ya se encuentra registrado");
}

const retirarVehiculo = (placa) =>{
    let vehiculo = buscarVehiculo(placa);
    if(vehiculo){
        parqueadero.splice(parqueadero.indexOf(vehiculo), 1);
        alert(calcularPagoHora(vehiculo.horaEntrada));
        alert("Vehiculo retirado con éxito")
    } else {
        alert("Vehiculo no encontrado");
    }
}

const calcularPagoHora = (horaEntrada) => {
    const horaSalida = new Date();
    const tiempoEstacionado = Math.ceil((horaSalida - horaEntrada) / (1000 * 60 * 60)); // Tiempo en horas
    const costo = tiempoEstacionado * 2500;
    return `El tiempo estacionado fue de ${tiempoEstacionado} horas. El cliente debe pagar $${costo}`;
}

const mostrarVehiculos = () =>{
    let vehiculos = ""
    if(parqueadero.length != 0){
        vehiculos = "VEHICULOS EN EL PARQUEADERO\n";
        for(const vehiculo of parqueadero){
            vehiculos += `
            Placa: ${vehiculo.placa}
            Propiedad: ${vehiculo.propiedad}
            Marca ${vehiculo.marca}
            Hora Entrada: ${vehiculo.horaEntrada}
            -------------------------------\n`
        }
    } else {
        vehiculos = "NO HAY VEHICULOS EN EL PARQUEADERO";
    }
    alert(vehiculos);
}

let continuar = true;

while (continuar) {
    let answer = parseInt(prompt(menu));
    let propiedad;
    let marca;
    let placa;
    switch(answer){
        case 1:
            propiedad = prompt("Ingrese la propiedad del vehiculo");
            marca = prompt("Ingrese la marca del vehiculo");
            do {
                placa = prompt("Ingrese la placa del vehiculo (Ingrese el valor sin espacios)").toUpperCase();
            } while (!validarFormatoPlaca(placa));

            agregarVehiculo(propiedad, marca, placa);
            console.log(parqueadero);
            break;

        case 2:
            placa = prompt("Ingrese la placa del vehículo que desea retirar");
            retirarVehiculo(placa);
            break;
        case 3:
            mostrarVehiculos()
            break;
        case 4:
            continuar = false;
            alert("Adiós :D");
            break;
        default:
            alert("Respuesta no válida");
            break;
    }
}