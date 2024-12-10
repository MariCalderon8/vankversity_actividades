/**
 * En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
    compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
    crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
    electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
    mensuales que deberá pagar por el electrodoméstico.
 */

let precio = parseFloat(prompt("Ingrese el valor del electrodoméstico"));
while (isNaN(precio) || precio < 0) {
    precio = parseFloat(prompt("Ingrese un valor válido"))
}

let plazoMeses = parseFloat(prompt("Ingrese el plazo en meses para pagar"));
while (isNaN(plazoMeses) || plazoMeses < 0) {
    plazoMeses = parseFloat(prompt("Ingrese un valor válido"))
}

let precioConInteres = precio + (precio * 0.05 * plazoMeses);
let cuotas = precioConInteres / plazoMeses;

alert(`El cliente debe pagar un total de $${precioConInteres} en ${plazoMeses} cuotas mensuales de ${cuotas}`);
