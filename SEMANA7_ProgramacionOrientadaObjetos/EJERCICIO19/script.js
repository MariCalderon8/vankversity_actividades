/**
 * Crear una clase CuentaBancaria con un atributo privado saldo y un método
    privado actualizarSaldo(). Crear métodos públicos para depositar() y retirar()
    que usen actualizarSaldo().
 */

class CuentaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }

    #actualizarSaldo(cantidad){
        this.#saldo += cantidad;
    }

    depositar(deposito){
        if(deposito > 0){
            this.#actualizarSaldo(deposito);
        } else {
            console.log(`Deposito negado. Cantidad no válida`);
        }
    }

    retirar(retiro){
        if(retiro > 0 && retiro < this.#saldo){
            this.#actualizarSaldo(retiro * -1)
        } else {
            console.log(`Retiro negado. Cantidad no válida`);
        }
    }
    
}

const cuenta1 = new CuentaBancaria(100000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);

cuenta1.depositar(50000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);

cuenta1.retirar(20000);
console.log(`Saldo actual: ${cuenta1.getSaldo()}`);
