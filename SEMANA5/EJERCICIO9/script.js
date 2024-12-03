/**
 * Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
    luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo
    menos cinco productos.
 */

let productos = {
    papa: 2500,
    arroz: 2000,
    lentejas: 3100,
    aceite: 5000,
    pan: 3000
}

const getPrecio = (producto) =>{
    if (productos[producto] != null) {
        return productos[producto];
    } else {
        return null;
    }
}

let respuesta = prompt("Ingrese el nombre del producto").toLowerCase();
const precio = getPrecio(respuesta);
if(precio){
    alert(`El precio de ${respuesta} es: ${precio}`);
} else {
    alert(`El producto no se encuentra registrado :(`)
}