/**
 *  Crear un sistema que emita alertas cuando el stock de productos esté bajo.
    Crear un arreglo de productos donde cada elemento tenga nombre, stock y umbral.
    Crear una función verificarStock que recorra el arreglo y emita una alerta para cada
    producto cuyo stock esté por debajo de su umbral.
    Crear una función actualizarStock que reciba un nombre de producto y una cantidad
    a restar o sumar, y actualice el stock.
 */

let productos = [ { nombre: "audifonos", stock: 100, umbral: 30 },  { nombre: "celular", stock: 100, umbral: 20 } ];

const verificarStock = () => {
    let alerta = '';
    productos.forEach(producto => {
        if(producto.stock < producto.umbral) alerta += producto.nombre + ' '
    });
    if(alerta != ''){
        alert(`Los siguientes productos están por debajo del umbral: ${alerta}`);
    } else {
        alert(`No hay productos con stock bajo`)
    }
}

const actualizarStock = (nombre, cantidad) => {
    let producto = productos.find(producto => producto.nombre == nombre);
    if(!producto) {
        alert('Producto no encontrado');
        //throw new Error('Producto no encontrado');
    }
    producto.stock += cantidad;
    alert(`nombre: ${producto.nombre}, stock: ${producto.stock}, umbral: ${producto.umbral}`);
}

let  repetir = true;

while (repetir) {
    let respuesta = parseInt(prompt('1. Verificar stock\n2. Actualizar stock\n3. Mostrar productos\n4. Salir'));
    let nombreProducto = '';
    let cantidad = 0;
    let infoProductos = '';
    switch(respuesta){
        case 1: 
            verificarStock();
            break;
        case 2:
            nombreProducto = prompt('Ingrese el nombre del producto');
            cantidad = parseInt(prompt('Ingrese la cantidad que quiere agregar o sustraer del stock'));
            actualizarStock(nombreProducto, cantidad);
            break;
        case 3:
            productos.forEach(product => infoProductos += `nombre: ${product.nombre}, stock: ${product.stock}, umbral: ${product.umbral}\n`);
            alert(infoProductos);
            break;
        case 4: 
            alert('Bye :D');
            repetir = false;
            break;
        default:
            alert('Respuesta no válida');
            break;
    }
}