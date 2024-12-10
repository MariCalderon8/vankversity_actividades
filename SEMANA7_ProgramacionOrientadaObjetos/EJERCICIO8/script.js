/**
 * Crear una clase Empleado con atributos nombre y salario. Que implemente
 * un método trabajar(). Implemente encapsulación.
 */

class Empleado{
    #nombre;
    #salario;

    constructor(nombre, salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }

    trabajar(){
        console.log(`${this.#nombre} está trabajando :D`);
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getSalario(){
        return this.#salario;
    }

    setSalario(salario){
        this.#salario = salario;
    }
}

const empleado = new Empleado("Juancho", 2500000);
empleado.trabajar();

console.log(`${empleado.getNombre()} es un empleado y su salario es de $${empleado.getSalario()}`);