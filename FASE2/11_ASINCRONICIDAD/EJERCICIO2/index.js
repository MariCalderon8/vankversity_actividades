/**
 * Manejo de Errores en Promesas
    Crear una promesa que se rechace si un número es menor a 0.5. Manejar el
    error con .catch() e imprimir el mensaje "Promesa rechazada" en ese
    caso.
 */

function isSmallerThan(valor) {
    return new Promise((resolve, reject) => {
        if (valor >= 0.5) {
            resolve(`Promesa Cumplida. El valor es: ${valor}`);
        } else {
            reject("Promesa rechaza. (El valor es menor a 0.5)");
        }
    });
}

// Promesa rechazada
isSmallerThan(0.2).then((mensaje) =>{
    console.log(mensaje);
}).catch((error) =>{
    console.error(error);
})

// Promesa Cumplida
isSmallerThan(0.8).then((mensaje) =>{
    console.log(mensaje);
}).catch((error) =>{
    console.error(error);
})