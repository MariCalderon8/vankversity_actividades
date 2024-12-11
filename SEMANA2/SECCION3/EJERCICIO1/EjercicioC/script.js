/**
 * c. La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la
    cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de
    Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases.
    El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
    cumple, el programa debe informar y solicitar nuevamente los datos.
 */

let longitud = parseInt(prompt("Ingrese la longitud de la cadena de ADN (múltiplo de 10)"));
while (isNaN(longitud) || longitud <= 0 || longitud % 10 !== 0) {
    longitud = parseInt(prompt("La longitud debe ser un múltiplo de 10. Ingrese un número válido."));
}

let cantidadG = longitud / 10;

// Calcular la cantidad de cada base según las condiciones 
let cantidadC = cantidadG * 4;
let cantidadT = cantidadG * 2;
let cantidadA = cantidadG * 3;

let cadenaADN = "";
let i;


for (i = 0; i < cantidadC; i++) {
    cadenaADN += "C";
}


for (i = 0; i < cantidadT; i++) {
    cadenaADN += "T";
}


for (i = 0; i < cantidadA; i++) {
    cadenaADN += "A";
}


for (i = 0; i < cantidadG; i++) {
    cadenaADN += "G";
}

let cadenaFinal = "";
let cadenaArray = cadenaADN.split(""); 

while (cadenaArray.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * cadenaArray.length);
    cadenaFinal += cadenaArray[indiceAleatorio];

    // Eliminar el carácter de la cadenaArray
    for (let j = indiceAleatorio; j < cadenaArray.length - 1; j++) {
        cadenaArray[j] = cadenaArray[j + 1];
    }
    cadenaArray.length--;
}

alert(`La cadena de ADN generada es: ${cadenaFinal}`);