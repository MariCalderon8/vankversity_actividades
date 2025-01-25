/**
 * Crear una Función Asíncrona Simple
    Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y
    consumirla con .then() o await.
 */

async function getMessage(){
    return 'Hola, Mundo';
}

// Consumir usando .then
getMessage()
    .then((message) => console.log(`Mensaje usando .then: ${message}`));


// Consumir usando await
async function showMessage() {
    const message = await getMessage();
    console.log(`Mensaje usando await: ${message}`);
}

showMessage();
