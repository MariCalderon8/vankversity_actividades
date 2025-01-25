/**
 * Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
 * condicionales y otra con estructura switch-case.
 */

let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un numero del 1 al 15"))
} while (numero < 1 || numero > 15 || isNaN(numero));

let divisores = 0;

for (let i = 1; i <= numero / 2; i++) {
    if(numero % i == 0){
        divisores++;
    }
}

//VERSION CON CONDICIONALES
alert(divisores)
if(divisores == 1){
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} es PRIMO`);
} else {
    alert(`VERSIÓN CON CONDICIONALES\nEl número ${numero} NO es PRIMO`);
}

//VERSION CON SWITCH

switch (divisores) {
    case 1:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} es PRIMO`);
        break;

    default:
        alert(`VERSIÓN CON SWITCH\nEl número ${numero} NO es PRIMO`);
        break;
}