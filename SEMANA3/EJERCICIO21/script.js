/**
 *  Escriba un programa que verifique si un número es primo utilizando dos funciones:
    ● esPrimo(numero): determina si un número es primo.
    ● imprimirResultado(numero): imprime si el número es primo o no, llamando a la
    función esPrimo.
 */

let numero = parseInt(prompt("Ingresa un número"));

function esPrimo(num){
    if (num <= 1) return false; 

    let divisores = 0;
    for(let i = 1; i <=  num / 2; i++){
        if(num % i === 0){
            divisores++;
        }
        if(divisores > 1){
            return false;
        }
    }
    return true;
}

function imprimirResultado(num){
    if(esPrimo(num)){
        alert(`El número ${num} es Primo`);
    } else {
        alert(`El número ${num} NO es Primo`);
    }
}

imprimirResultado(numero);