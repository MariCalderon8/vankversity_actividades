/**
 *  Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos
    funciones:
    ● calcularArea(largo, ancho): calcula el área del rectángulo.
    ● calcularPerimetro(largo, ancho): calcula el perímetro.
 */

let base = parseFloat(prompt("Ingrese la base del rectángulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));

const calcularPerimetro = (base, altura) => base * 2 + altura * 2;

const calcularArea = (base, altura) => base * altura;

alert(`El perimetro del rectángulo es: ${calcularPerimetro(base, altura)} \nEl área del rectángulo es: ${calcularArea(base, altura)}`);