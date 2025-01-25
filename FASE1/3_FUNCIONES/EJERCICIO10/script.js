/**
 * Escriba una función la cual reciba una cadena como parámetro y ésta retorne la
 * misma cadena pero sin sus vocales.
 */
function generarCadenaSinVocales(cadena){
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        cadena = cadena.toLowerCase();
        if(cadena.charAt(i) != "a" && cadena.charAt(i) != "e" && cadena.charAt(i) != "i" && cadena.charAt(i) != "i" && cadena.charAt(i) != "o" && cadena.charAt(i) != "u"){
            nuevaCadena += cadena.charAt(i);
        }
    }
    return nuevaCadena;
}

console.log(generarCadenaSinVocales("Murcielago"));