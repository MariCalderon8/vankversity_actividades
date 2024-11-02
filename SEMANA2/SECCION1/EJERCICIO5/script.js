/**
 * Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
 * y otra con estructura switch-case.
 */

let numero = parseInt(prompt("Ingrese un número"));

//VERSIÓN CON CONDICIONALES

if(numero % 2 == 0){
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} es PAR`);
} else if (numero % 2 == 1) {
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} es IMPAR`);
} else {
    alert(`VERSIÓN CON CONDICIONALES\nDatos no válidos`);

}

//VERSIÓN CON SWITCH

switch(numero % 2){
    case 0:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} es PAR`);
        break;
    case 1:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} es IMPAR`);
        break;
    default:
        alert(`VERSIÓN CON SWITCH\nDatos no válidos`);
        break;
}