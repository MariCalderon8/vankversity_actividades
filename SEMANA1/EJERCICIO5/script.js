/**
 * 5. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
 */

let radio = parseFloat(prompt("Ingrese el radio del círculo"));
let area = Math.PI * (radio**2);

alert(`El área del círculo es: ${area}`);