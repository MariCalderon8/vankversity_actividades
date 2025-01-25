/**
 * Procesar Datos en Serie con await
    Crear una función que procese una lista de nombres (en un arreglo) uno por
    uno. Usa await para simular un retraso de 1 segundo entre cada nombre
    procesado. Implementar la función delay y el arreglo de nombres.
 */

const names = ['Pepe', 'Federica', 'Juanito', 'Perenganita', 'Felipito', 'Patroclo', 'Godofredo', 'Filomena']

async function procesarNombres(names) {
    for (const name of names) {
        await delay(1000);
        console.log(`Procesado: ${name}`);
    }
}

procesarNombres();