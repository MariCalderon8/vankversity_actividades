/**
 * Escribe una función que use map y reduce para calcular el total de ventas en un
    array de objetos.

    const ventas = [ { producto: "A", cantidad: 10, precio: 2 }, { producto:

    "B", cantidad: 5, precio: 3 } ];
 */

const ventas = [ 
    { producto: "A", cantidad: 10, precio: 2 },
    { producto:"B", cantidad: 5, precio: 3 } 
];

const calcularTotalVentas = (arreglo) =>{
    return arreglo
        .map(producto => producto.cantidad * producto.precio)
        .reduce((total, venta) => total + venta, 0)
}

function imprimirResultado(arreglo, callback) {
    console.log(`El total de ventas fue: $${callback(arreglo)}`);
}

imprimirResultado(ventas, calcularTotalVentas);
