/**
 * En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
    pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
    mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
    switch-case.
 */

let nombreProducto = prompt("Seleccione alguno de los siguientes productos: lentejas, crema, arroz y vino.");
nombreProducto = nombreProducto.toLowerCase();

// VERSION CON CONDICIONALES
let resultado1;

if(nombreProducto == "lentejas"){
    resultado1 = "Este producto NO paga IVA";
} else if( nombreProducto == "crema"){
    resultado1 = "Este producto paga IVA";
} else if(nombreProducto == "arroz"){
    resultado1 = "Este producto NO paga IVA";
} else if(nombreProducto == "vino"){
    resultado1 = "Este producto paga IVA";
} else {
    resultado1 = "El producto ingresado no existe"
}

alert(`(Versión con condicionales)\n${resultado1}`);

// VERSION CON SWITCH CHASE

let resultado2;

switch (nombreProducto) {
    case "lentejas":
        resultado2 = "Este producto NO paga IVA";
        break;
    case "crema":
        resultado2 = "Este producto paga IVA";
        break;
    case "arroz":
        resultado2 = "Este producto NO paga IVA";
        break;
    case "vino":
        resultado2 = "Este producto paga IVA";
        break;
    default:
        resultado2 = "El producto ingresado no existe"
        break;
}

alert(`(Versión con Switch-case)\n${resultado2}`);
