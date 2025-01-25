/**
 * Crear una clase Vehiculo con un atributo privado modelo, un atributo público
marca, y un método privado encenderMotor() que sea usado en el método
público arrancar().
 */

class Vehiculo{
    #modelo;
    constructor(modelo, marca){
        this.#modelo = modelo;
        this.marca = marca;
    }

    #encenderMotor(){
        console.log(`Motor encendido`);
    }

    arrancar(){
        this.#encenderMotor();
        console.log("🚗💨");
    }

    getModelo(){
        return this.#modelo;
    }
}

const vehiculo = new Vehiculo("2005", "Toyota");
console.log(`Modelo: ${vehiculo.getModelo()}, Marca: ${vehiculo.marca}\n`);
vehiculo.arrancar();