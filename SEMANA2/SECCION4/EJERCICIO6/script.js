/**
 * Construya un programa que dados dos números enteros, encuentre su cociente mediante restas sucesivas.
 */

let dividendo = parseInt(prompt("Ingrese el primer número"));
while(isNaN(dividendo)){
    dividendo = parseInt(prompt("Ingrese un número válido"));
}

let divisor = parseInt(prompt("Ingrese el segundo numero"));
while(isNaN(divisor) || divisor == 0){
    divisor = parseInt(prompt("Ingrese un número válido"));
}

let cociente = 0;
let residuo = dividendo;

while (residuo >= divisor) {
    residuo -= divisor; 
    cociente++; 
}

alert(`${dividendo} / ${divisor} = ${cociente} \nEl residuo es: ${residuo}`)
