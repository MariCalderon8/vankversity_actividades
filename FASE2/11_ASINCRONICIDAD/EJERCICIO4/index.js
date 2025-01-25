/**
 * Usar Promise.all()
    Crear tres promesas que se resuelvan en diferentes tiempos (por ejemplo,
    1s, 2s, 3s). Usar Promise.all() para esperar a que todas se resuelvan e
    imprimir los resultados en un arreglo.
 */

const promise2s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa de 2s');
        resolve('Promesa cumplida luego de 2s')
    }, 2000)
})

const promise4s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa de 4s');
        resolve('Promesa cumplida luego de 4s')
    }, 4000)
})

const promise6s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa de 6s');
        resolve('Promesa cumplida luego de 6s')
    }, 6000)
})

Promise.all([promise2s, promise4s, promise6s]).then((arraySolutions) =>{
    console.log(arraySolutions);
}).catch((error) => {
    console.error(error);
})