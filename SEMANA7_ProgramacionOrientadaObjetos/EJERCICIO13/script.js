/**
 * Crear una clase Cliente con un atributo privado saldo y un método privado
    calcularDescuento() que se utilice dentro de un método público
    aplicarDescuento()
 */

class Cliente{
    #nombre;
    #saldo;
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.#saldo = saldo;
    }

    #calcularDescuento(){
        if (this.#saldo > 1000) {
            return 0.1; // 10% de descuento
          } else if (this.#saldo > 500) {
            return 0.05; // 5% de descuento
          } else {
            return 0; // Sin descuento
          }
    }

    aplicarDescuento() {
        const descuento = this.#calcularDescuento();
        const montoDescuento = this.#saldo * descuento;
        this.#saldo -= montoDescuento;
        return `Se ha aplicado un descuento de ${descuento * 100}%. Nuevo saldo: $${this.#saldo}`;
    }
    
    getSaldo() {
        return this.#saldo;
    }

    getNombre(){
        return this.#nombre;
    }

}

const cliente = new Cliente("Pepe", 10000);
console.log(`Nombre: ${cliente.getNombre()}, Saldo: $${cliente.getSaldo()}`);
console.log(cliente.aplicarDescuento());
