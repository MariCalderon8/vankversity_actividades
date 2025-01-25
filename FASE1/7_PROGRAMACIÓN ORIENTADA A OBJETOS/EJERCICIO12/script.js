/**
 * Crear una clase Escuela con un atributo estático numEstudiantes que se
incremente cada vez que se cree un nuevo objeto Estudiante
 */

class Escuela{

    static numEstudiantes = 0;
    #listaEstudiantes;
    constructor(){
        this.#listaEstudiantes = [];
    }

    static getCantEstudiantes(){
        return this.numEstudiantes;
    }

    registrarEstudiante(estudiante){
        this.#listaEstudiantes.push(estudiante);
        Escuela.numEstudiantes++;
        console.log("Estudiante registrado");
    }

    getListaEstudiantes(){
        return this.#listaEstudiantes;
    }
}

class Estudiante{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const escuela = new Escuela();

const estu1 = new Estudiante("Juancho", 15);
const estu2 = new Estudiante("Pepe", 12);
const estu3 = new Estudiante("Fulanita", 17);

escuela.registrarEstudiante(estu1);
escuela.registrarEstudiante(estu2);
escuela.registrarEstudiante(estu3);

console.log(`Hay ${Escuela.getCantEstudiantes()} estudiantes registrados en la escuela`);
console.log("Los estudiantes son: ");
console.log(escuela.getListaEstudiantes());

