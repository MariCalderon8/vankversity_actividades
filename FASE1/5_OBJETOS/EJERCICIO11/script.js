/**
 * Cree un programa que solicite al usuario el nombre de uno de los cinco continentes,
    luego, muestre cinco países del continente seleccionado por el usuario, estos paises deben
    ser elementos de un arreglo.
 */

let continentes = {
    asia: [ 'China', 'India', 'Japón', 'Corea del Sur', 'Arabia Saudita' ],
    america: [ 'Estados Unidos', 'México', 'Brasil', 'Canadá', 'Argentina' ],
    africa: [ 'Nigeria', 'Egipto', 'Sudáfrica', 'Kenia', 'Argelia' ],
    europa: [ 'Alemania', 'Francia', 'Reino Unido', 'Italia', 'España' ],
    oceania: [ 'Australia', 'Nueva Zelanda', 'Fiyi', 'Papúa Nueva Guinea', 'Samoa' ]
}

let respuesta = prompt("Ingrese el nombre de alguno de los 5 continentes").toUpperCase();
let mensaje = `Estos son algunos paises de ${respuesta}:\n`;
switch (respuesta) {
    case "ASIA":
        mensaje += continentes.asia;
        break;

    case "AMERICA":
    case "AMÉRICA":
        mensaje += continentes.america;
        break;

    case "AFRICA":
    case "ÁFRICA":
        mensaje += continentes.africa;
        break;

    case "EUROPA":
        mensaje += continentes.europa;
        break;

    case "OCEANIA":
    case "OCEANÍA":
        mensaje += continentes.oceania;
        break;
    default:
        mensaje = "El nombre del continente no es válido"
        break;
}
alert(mensaje)