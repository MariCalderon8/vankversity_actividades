/**
 * Cree un programa que realice la conversión de grados Celsius a Fahrenheit
 */

let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsius"));
while (isNaN(celsius)) {
    celsius = parseFloat(prompt("Ingrese un valor válido"))
}

let fahrenheit = (celsius * 9/5) + 32;

alert(`${celsius}°C son ${fahrenheit}°F`);