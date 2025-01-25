/**
 *  Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos
    funciones:
    ● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit.
    ● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.
 */
let tipoGrado;

do {
    tipoGrado = parseInt(prompt("Ingresa la operación que desea realizar: \n(1) Celsius -> Farenheit / (2) Farenheit -> Celsius"));    
} while (tipoGrado !== 1 && tipoGrado !== 2);

let grados = parseFloat(prompt("Ingrese los grados a convertir:"));

const celsiusToFahrenheit = (gradosCelsius) => 9/5 * gradosCelsius + 32;

const fahrenheitToCelsius = (grdosFarenheit) => (grdosFarenheit - 32) / (9/5);

if(tipoGrado == 1){
    alert(`${grados}°C son ${celsiusToFahrenheit(grados)}°F`)
} else {
    alert(`${grados}°F son ${fahrenheitToCelsius(grados)}°C`)
}