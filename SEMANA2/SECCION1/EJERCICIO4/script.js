/**
 * Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
 * triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
 */

let angulo1 = parseFloat(prompt("Ingrese el primer ángulo del triángulo"));
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo del triángulo"));
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo del triángulo"));

// VERSION CON CONDICIONALES


if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && (angulo1 + angulo2 + angulo3 == 180)){
    alert("VERSION CON CONDICIONALES\nLos ángulos corresponden a un triángulo");
} else {
    alert("VERSION CON CONDICIONALES\nLos ángulos NO corresponden a un triángulo");
}

//VERSION CON SWITCH

let esTriangulo = (angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && (angulo1 + angulo2 + angulo3 == 180));
        
        // Estructura switch-case para mostrar el resultado
switch (esTriangulo) {
    case true:
        alert("VERSION CON SWITCH\nLos ángulos corresponden a un triángulo")
        break;
    case false:
        alert("VERSION CON SWITCH\nLos ángulos NO corresponden a un triángulo")
        break;
    default:
        break;       
}