/**
 * Crear una clase Persona con un atributo privado edad y una subclases
    Empleado que acceda al método público setEdad() de Persona para
    modificar edad
 */

class Persona{
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getNombre(){
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(edad){
        this.#edad = edad;
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, trabajo){
        super(nombre, edad);
        this.trabajo = trabajo;
    }
}

const empleado = new Empleado("Pepe", 32, "Profesor");
console.log(`Edad actual: ${empleado.getEdad()}`);
empleado.setEdad(42);
console.log(`Actualizando edad...`);
console.log(`Nueva edad: ${empleado.getEdad()}`);