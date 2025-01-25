/**
 * Crear una Promesa Simple
    Escribir una promesa que resuelva después de 2 segundos con el mensaje
    "Promesa cumplida". Luego, consumirla usando .then() para imprimir el
    mensaje en consola.
 */

// Definición de la promesa

const myPromise = new Promise((resolve, reject) => {
    function resolvePromise() {
        resolve('Promesa Cumplida')
    }
    setTimeout(resolvePromise, 2000)
});

// Usar la promesa
myPromise.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
})