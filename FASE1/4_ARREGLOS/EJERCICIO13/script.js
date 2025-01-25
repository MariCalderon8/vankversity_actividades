/**
 * Cree una función que reciba un arreglo de nombres de personas y muestre si la letra
“c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre,
mostrar las veces que se encuentra(considerando las apariciones entre todos los
nombres) . Se le debe pedir al usuario que introduzca el arreglo.
 */

let nombres = [];

let cantNombres = 0;
while (cantNombres <= 0) {
    cantNombres = prompt("Indique la cantidad de nombres a ingresar");
}

for (let i = 0; i < cantNombres; i++) {
    nombres[i] = prompt(`Ingrese el nombre ${i + 1}`).toLocaleLowerCase();
}
const countC = (nombres) =>{
    let count = 0;
    nombres.forEach(element => {
        if(element.includes("c")) count++;
    });
    return count;
}

console.log(`${countC(nombres)} nombre(s) contienen la letra c`);