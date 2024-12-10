/**
 * Crear una clase base Animal con un método hacerSonido(), y dos subclases
 * Perro y Gato que sobrescriban el método.
 */

class Animal{

    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("Animal haciendo sonido");
    }
}

class Gato extends Animal{

    constructor(nombre, edad){
        super(nombre);
        this.edad = edad;
    }

    hacerSonido(){
        console.log("¡Miau!");
    }
    
}

class Perro extends Animal{

    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(){
        console.log("¡Guau!");
    }
    
}

const gato1 = new Gato("Tom", 2);
gato1.hacerSonido();

const perro1 = new Perro("Scooby-doo", "Gran danés");
perro1.hacerSonido();