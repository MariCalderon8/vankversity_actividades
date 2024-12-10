/**
 * Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
 con un IVA de 19%.
 */

let precio = parseFloat(prompt("Ingrese el precio del producto"));
let precioConIva = precio + precio * 0.19;

alert(`El precio final del producto con IVA de 19% es de $${precioConIva}`);