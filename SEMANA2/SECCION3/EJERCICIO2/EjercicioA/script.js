/**
 * Claudia, una investigadora invitada de otro laboratorio necesita otros programas sobre una cadena dada como
    constante en el programa y otra de menor tamaño ingresada por ella:

    a. Determinar la primera posición en la que la segunda secuencia está dentro de la primera. Si no aparece debe
    imprimir -1.
 */

const cadenaConstante = "AGCTTAGCTAAGTCTAGGCTAG";

let secuencia = prompt("Ingrese una secuencia de ADN más pequeña:");

if (secuencia.length === 0) {
    alert("La secuencia ingresada está vacía.");
} else {
    let posicion = cadenaConstante.indexOf(secuencia);
    alert(posicion); 
}