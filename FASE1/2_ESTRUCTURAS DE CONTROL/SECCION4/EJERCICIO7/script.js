/**
 * Escriba un algoritmo que calcule la exponente de a^b
 * potencia = a * a * a * ... * a (b veces)
 */

let num = parseInt(prompt("Ingrese el número"));
while(isNaN(num)){
    num = parseInt(prompt("Ingrese un número válido"));
}

let exponente = parseInt(prompt("Ingrese el valor de la exponente"));
while(isNaN(exponente) || exponente < 0){
    exponente = parseInt(prompt("Ingrese un número válido"));
}
let potencia = 1;

for (let i = 1; i <= exponente; i++) {
    potencia *= num;
}

alert(`${num}^${exponente} = ${potencia}`);