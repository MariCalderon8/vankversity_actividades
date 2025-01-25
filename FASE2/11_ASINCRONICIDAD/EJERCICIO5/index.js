/**
 * Usar Promise.race()
    Crear dos promesas: una se resuelve en 2 segundos y otra en 5 segundos.
    Usar Promise.race() para determinar cuál se resuelve primero y mostrar
    el resultado.
 */

const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa 1 (2s)'), 2000)
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa 2 (5s)'), 5000)
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa 3 (2s)'), 2000)
})

Promise.race([promise1, promise2, promise3])
    .then((promise) => console.log(`La promesa más rápida fue: ${promise}`))