/**
 * Crear una clase CuentaBancaria que tenga un saldo privado y métodos
 * públicos para depositar y retirar dinero.
 */

class CuentaBancaria{
    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }

    depositar(deposito){
        if(deposito > 0){
            this.#saldo += deposito;
        }
    }

    retirar(retiro){
        if(retiro > 0 && retiro < this.#saldo){
            this.#saldo -= retiro;
        }
    }
}

const cuenta1 = new CuentaBancaria(100000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);

cuenta1.depositar(50000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);

cuenta1.retirar(20000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);
