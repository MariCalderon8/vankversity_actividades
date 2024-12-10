/**
 * Escribe una función que use setTimeout con un callback para imprimir un mensaje
 * después de 2 segundos.
 */

const imprimirMensaje = (mensaje) => {
    console.log(mensaje);
}

function imprimirConRetaso(mensaje, callback){
    setTimeout(() =>{
        callback(mensaje);
    }, 2000); //2000 milisegundos (2s)
}

console.log(`Mensaje sin retraso`);
imprimirConRetaso("Mensaje con 2s con retraso", imprimirMensaje)