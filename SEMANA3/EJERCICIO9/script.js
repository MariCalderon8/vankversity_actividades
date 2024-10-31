/**
 * Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
 * de vocales que contiene la cadena.
 */

let cadena = prompt("Ingrese el contenido de la cadena");

function contarVocales(cadena){
    cadena = cadena.toLowerCase();
    let contador = 0;
    let letra = "";
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            contador++;
        } 
    }
    return contador;
}

alert(`La cadena "${cadena}" tiene ${contarVocales(cadena)} vocales`);