/**
 * Escribe una función que reciba un string y use forEach para imprimir cada letra en
 * una nueva línea.
 */

let texto = "Parangaricutirimicuaro";

const imprimirPorLinea = (cadena) =>{
    cadena.split('').forEach(letra => {
        console.log(letra);
    });
}

function funcionPrincipal(cadena, callback) {
    console.log(`Palabra a deletrear: ${cadena}`);
    callback(cadena)
}

funcionPrincipal(texto, imprimirPorLinea);