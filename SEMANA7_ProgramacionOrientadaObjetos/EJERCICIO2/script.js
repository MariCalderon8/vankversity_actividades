/**
 * Crear una clase Contador con un atributo estático cuenta y un método
 * estático incrementar() que aumente el valor de cuenta
 */

class Contador{
    static cuenta = 0;

    static incrementar(){
        Contador.cuenta++;
    }
}

Contador.incrementar();
Contador.incrementar();
Contador.incrementar();
Contador.incrementar();
Contador.incrementar();

console.log(`La cuenta estática del contador va en ${Contador.cuenta}`);