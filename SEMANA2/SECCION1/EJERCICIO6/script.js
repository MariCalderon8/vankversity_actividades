/**
 * Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
 * condicionales y otra con estructura switch-case.
 */

let numero;
do {
    numero = parseInt(prompt("Ingrese un número"));
} while (isNaN(numero));


//VERSIÓN CON CONDICIONALES

if(numero % 5 == 0){
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} es DIVISIBLE entre 5`);
} else if (numero % 5 != 0) {
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} NO es DIVISIBLE entre 5`);
}

//VERSIÓN CON SWITCH

switch(numero % 5){
    case 0:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} es DIVISIBLE entre 5`);
        break;
    default:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} NO es DIVISIBLE entre 5`);
        break;
}