/**
 * Crear una clase Empleado y una subclase Gerente que sobrescriba un
 * método trabajar()
 */

class Empleado{
    constructor(nombre){
        this.nombre = nombre;
    }

    trabajar(){
        console.log(`${this.nombre} está trabajando`);
    }
}

class Gerente extends Empleado{
    constructor(nombre){
        super(nombre);
    }

    trabajar(){
        console.log(`${this.nombre} es el gerente y trabaja supervisando a sus empleados`);
    }
}

const empleado1 = new Empleado("Pepe");
empleado1.trabajar();

const gerente1 = new Gerente("Juancho");
gerente1.trabajar();
