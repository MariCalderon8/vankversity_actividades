/**
 * Escriba una función que reciba un número entero y dicha función pueda determinar
 * si el número enviado es positivo o negativo.
 */

let num = parseInt(prompt("Ingrese un numero"));

const identificarNumEntero = (num) => {
    if(num > 0){
        return "El numero es positivo";
    } else if( num < 0){
        return "El numero es negativo";
    } else if( num == 0){
        return "El numero es 0";
    }
    return "El numero no es válido";
}

alert(identificarNumEntero(num));