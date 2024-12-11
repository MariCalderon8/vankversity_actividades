/**
 * Haga un método para descomponer un número en sus factores primos, retornando el resultado en
forma de cadena.
 */

let num = parseInt(prompt("Ingrese un número entero positivo"));

while (isNaN(num) || num < 2) {
    num = parseInt(prompt("Ingrese un número válido mayor o igual a 2"));
}

let resultado = "";  
let divisor = 2;    
let residuo = num; 

while (residuo > 1) {
    if (residuo % divisor === 0) {  
        if (resultado !== "") {
            resultado += " * ";  
        }
        resultado += divisor;  
        residuo /= divisor;        
    } else {
        divisor++; 
    }
}

alert(`Los factores primos de ${num} son: ${resultado}`);