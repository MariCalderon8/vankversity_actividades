/**
 * Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.
 */

let precio = parseFloat(prompt("Ingrese el valor del producto"));
let precioConDescuento = precio - precio * 0.1;

alert(`El precio final del producto, con descuento del 10%, es de: $${precioConDescuento}`);