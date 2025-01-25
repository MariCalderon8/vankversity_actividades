/**
 * b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
    cualquier posición y orden dentro de la cadena.
 */

let longitud = parseInt(prompt("Ingrese la longitud de la cadena de ADN"));
while (isNaN(longitud) || longitud <= 0) {
    longitud = parseInt(prompt("Ingrese un número válido para la longitud de la cadena"));
}

const bases = ["A", "T", "C", "G"];

let base1 = bases[Math.floor(Math.random() * 4)];
let base2 = bases[Math.floor(Math.random() * 4)];

while (base1 === base2) {
    base2 = bases[Math.floor(Math.random() * 4)]; 
}

let cadenaADN = "";
for (let i = 0; i < longitud; i++) {
    let baseSeleccionada = Math.random() < 0.5 ? base1 : base2;
    cadenaADN += baseSeleccionada;
}

alert(`La cadena de ADN generada es: ${cadenaADN}`);