/**
 * Encadenamiento de Promesas
    Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse.
    Usar tres promesas y encadenarlas con .then() para que se ejecuten en
    orden.
 */

const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1. Tomar dos panes')
        }, 1000)
    })
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2. Agregar jamón y queso')
        }, 1000)
    })
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3. Cerrar el sandwich con ambos panes')
        }, 1000)
    })
}

const finalStep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('¡Sandwich preparado! 😋')
        }, 1000)
    })
}

console.log('¡Vamos a preparar un sandwich 🥪!');
step1()
    .then((step) => {
        console.log(step);
        return step2();
    })
    .then((step) => {
        console.log(step);
        return step3();
    })
    .then((step) => {
        console.log(step);
        return finalStep();
    })
    .then((step) => {
        console.log(step);
    })