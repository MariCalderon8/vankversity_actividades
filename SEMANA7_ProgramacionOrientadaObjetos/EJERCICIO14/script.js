/**
 * Crear una clase Producto con un atributo privado precio y métodos públicos
 * setPrecio() y getPrecio() para acceder y modificar el precio.
 */

class Producto{
    #nombre;
    #precio;

    constructor(nombre, precio){
        this.#nombre = nombre;
        this.#precio = precio;
    }

    getNombre(){
        return this.#nombre;
    }

    getPrecio(){
        return this.#precio;
    }

    setPrecio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }

}

const producto = new Producto("Camiseta adulto", 40000);
console.log(`Nombre: ${producto.getNombre()} | Precio: $${producto.getPrecio()}`);
console.log(`Cambiando precio...`);
producto.setPrecio(60000);
console.log(`Nombre: ${producto.getNombre()} | Nuevo precio: $${producto.getPrecio()}`);
