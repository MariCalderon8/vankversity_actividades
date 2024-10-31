/**
 * Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
 * La idea es que los números recibidos se puedan operar según la operación que
 * hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).
 */

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division, potencia)");

function realizarOperacion(num1, num2, operacion){
    operacion = operacion.toLowerCase();
    switch(operacion){
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if(num2 != 0){
                return num1 / num2;
            }
            alert("No se puede dividir entre cero");
            break;
        case "potencia":
            return num1** num2;
        default:
            alert("Operación no válida")
            break;
    }
}

alert(`El resultado de la operacion es: ${realizarOperacion(num1, num2, operacion)}`);