/**
 * Usa map para extraer un campo específico de un array de objetos y convertirlo en
    un nuevo array.
    const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];
    console.log(nombres); // ["Ana", "Juan", "Luisa"]
 */
const usuarios = [{ nombre: "Ana", edad: 18 }, { nombre: "Juan", edad: 20 }, { nombre: "Luisa",  edad: 32}];

const extraerCampoArreglo = (campo, arreglo) =>{
    return arreglo.map(
        usuario => usuario[campo]
    )
}

function imprimirResultado(campo, arreglo, callback) {
    console.log(`\nExtraer campo ${campo} del arreglo de usuarios`);
    console.log(callback(campo, arreglo));
}

imprimirResultado("nombre", usuarios, extraerCampoArreglo);
imprimirResultado("edad", usuarios, extraerCampoArreglo);