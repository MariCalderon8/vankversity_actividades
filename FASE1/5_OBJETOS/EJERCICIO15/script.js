/**
 *  Cree un programa el cual facilite a un cliente manejar su inventario de ropa, cada objeto
    representa un producto el cual tendrá las siguientes propiedades: nombre, categoría precio,
    cantidad y código.

    El usuario necesita poder agregar, editar, eliminar y visualizar cada uno de los
    productos y también tener otra opción la cual le permite visualizar todos sus
    productos.
    Al momento de agregar un nuevo producto se debe validar que el código del
    producto sea único y no se repita con algún otro, en dado caso que pase esto se le
    debe notificar al usuario.
 */

let ropa = []

const buscarRopa = (codigo) => {
    let producto = ropa.find(product => product.codigo == codigo);
    return producto;
}

const agregarRopa = (nombre, categoria, precio, cantidad, codigo) => {
    if(validarCodigo(codigo)){
        ropa.push({
            nombre: nombre, categoria: categoria, precio: precio, cantidad: cantidad, codigo: codigo
        });
        alert('Ropa agregada')
    }
}

const eliminarRopa = (codigo) => {
    let producto = buscarRopa(codigo);
    if(producto){
        ropa.splice(ropa.indexOf(producto), 1);
        alert('Ropa eliminada')
    } else {
        alert('Producto no encontrado')
    }
}

const editarRopa = (codigo, nombre, categoria, precio, cantidad) => {
    let producto = buscarRopa(codigo);
    if(producto){
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio = precio;
        producto.cantidad = cantidad;
        alert('Ropa editada')
    }else {
        alert('Producto no encontrado')
    }
    
}

const validarCodigo = (codigo) =>{
    let producto = buscarRopa(codigo);
    if(producto){ 
        alert('El codigo ya se encuentra registrado')
        return false
    } else {
        return true
    } 
}

const mostrarRopa = () =>{
    let infoRopa = '';
    ropa.forEach(producto => infoRopa += `codigo: ${producto.codigo}, nombre: ${producto.nombre}, categoria: ${producto.categoria}, precio: ${producto.precio}, cantidad: ${producto.cantidad}\n`);
    alert(infoRopa);
}

let repetir = true;

while(repetir){
    let respuesta = parseInt(prompt('1. Agregar\n2. Eliminar\n3. Editar\n4. Mostrar todo\n5. Salir'));
    let codigo = '';
    let nombre = '';
    let categoria = '';
    let precio = 0;
    let cantidad = 0;

    switch (respuesta) {
        case 1:
            do{
                codigo = prompt('Ingrese el codigo del nuevo producto');
            } while (!validarCodigo(codigo));
            nombre = prompt('Ingrese el nombre');
            categoria = prompt('Ingrese la categoria');
            precio = parseFloat(prompt('Ingrese el precio'));
            cantidad = parseInt(prompt('Ingrese la cantidad'));
            agregarRopa(nombre, categoria, precio, cantidad, codigo);
            break;
        case 2:
            codigo = prompt('Ingrese el código del producto que desea eliminar');
            eliminarRopa(codigo);
            break;
        case 3:
            do{
                codigo = prompt('Ingrese el código del producto que desea editar');
                if(!buscarRopa(codigo)){
                    alert('Producto no encontrado');
                    codigo = '';
                }
            }while (codigo == '');
            nombre = prompt('Ingrese el nuevo nombre');
            categoria = prompt('Ingrese la nueva categoria');
            precio = parseFloat(prompt('Ingrese el precio'));
            cantidad = parseInt(prompt('Ingrese la cantidad'));
            editarRopa(codigo, nombre, categoria, precio, cantidad);
            break;
        case 4:
            mostrarRopa();
            break;
        case 5:
            alert('Bye :D');
            repetir = false;
            break;
        default:
            alert('Respuesta no válida')
            break;
    }
}