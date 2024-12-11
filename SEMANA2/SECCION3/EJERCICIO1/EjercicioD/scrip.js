/**
 * d. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente), pero indicando el
    porcentaje de la primera base seleccionada, de tal forma que el porcentaje de la segunda, sea el complemento
    para completar la longitud indicada. El programa debe impedir que el porcentaje ingresado sea menor a 0% y
    mayor al 99%. Para garantizar por lo menos un 1% para la segunda base. Si esta condición no se cumple, el
    programa debe informar y solicitar nuevamente los datos.
 */

let longitud = parseInt(prompt("Ingrese la longitud de la cadena de ADN"));
while (isNaN(longitud) || longitud <= 0) {
    longitud = parseInt(prompt("Ingrese un número válido para la longitud de la cadena"));
}

let porcentajeBase1 = parseInt(prompt("Ingrese el porcentaje de la primera base (entre 1% y 99%)"));
while (isNaN(porcentajeBase1) || porcentajeBase1 < 1 || porcentajeBase1 > 99) {
    porcentajeBase1 = parseInt(prompt("El porcentaje debe ser un valor entre 1% y 99%. Ingrese nuevamente"));
}

const bases = ["A", "T", "C", "G"];
let base1 = bases[Math.floor(Math.random() * 4)];
let base2 = bases[Math.floor(Math.random() * 4)];

while (base1 === base2) {
    base2 = bases[Math.floor(Math.random() * 4)]; 
}

let cantidadBase1 = Math.floor((porcentajeBase1 / 100) * longitud);
let cantidadBase2 = longitud - cantidadBase1;

let cadenaADN = "";
for (let i = 0; i < cantidadBase1; i++) {
    cadenaADN += base1; 
}
for (let i = 0; i < cantidadBase2; i++) {
    cadenaADN += base2; 
}

let cadenaFinal = "";
let cadenaArray = cadenaADN.split(""); 

while (cadenaArray.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * cadenaArray.length);

    cadenaFinal += cadenaArray[indiceAleatorio];
    for (let j = indiceAleatorio; j < cadenaArray.length - 1; j++) {
        cadenaArray[j] = cadenaArray[j + 1];
    }
    cadenaArray.length--; 
}

alert(`La cadena de ADN generada es: ${cadenaFinal}`);