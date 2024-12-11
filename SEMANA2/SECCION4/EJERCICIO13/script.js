/**
 * Devolver un triángulo como el siguiente, pedir el n. Concatenar en un String
 *  n = 4
 * 
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * *
 *  * * 
 *  *
 */


let num = parseInt(prompt("Ingrese un número entero positivo"));

while (isNaN(num) || num < 0) {
    num = parseInt(prompt("Ingrese un número válido"));
}

let cadenaTriangulo = "";
let contador = 1;

while(contador <= num * 2 - 1){ 
    
    let aux = 0;
    if (contador <= num){
        aux = contador;
    } else {
        aux = num * 2 - contador;
    }

    for (let i = 0; i < aux; i++) {
        cadenaTriangulo += " *";
    }

    cadenaTriangulo += "\n";
    contador++;
}

console.log(cadenaTriangulo);