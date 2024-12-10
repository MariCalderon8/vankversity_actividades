/**
 * Crear una clase Universidad con un atributo estático numEstudiantes y un
    método estático registrarEstudiante()
 */

class Universidad{
    static numEstudiantes = 0;
    #listaEstudiantes;
    constructor(){
        this.#listaEstudiantes = []
    }

    registrarEstudiante(estudiante){
        this.#listaEstudiantes.push(estudiante);
        Universidad.numEstudiantes++;
    }

    getNumEstudiantes(){
        return Universidad.numEstudiantes;
    }

    getListaEstudiantes(){
        return this.#listaEstudiantes;
    }
}

const eam = new Universidad();
eam.registrarEstudiante("Mari");
eam.registrarEstudiante("Cami");
eam.registrarEstudiante("Martha");
eam.registrarEstudiante("Hugo");
eam.registrarEstudiante("Juanca");

console.log(`Hay ${eam.getNumEstudiantes()} inscritos`);
console.log(`Los estudiantes son: ${eam.getListaEstudiantes()}`);