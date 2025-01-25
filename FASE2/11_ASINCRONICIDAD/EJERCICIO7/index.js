/**
 * Uso de await con una Promesa
    Crea una función asíncrona que utilice await para esperar una promesa que
    resuelve en 3 segundos y luego imprime "Proceso terminado".
 */

function promise3s() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Proceso terminado'), 3000);
    });
}

async function showPromiseResult(params) {
    const result = await promise3s();
    console.log(result);
}

showPromiseResult();
