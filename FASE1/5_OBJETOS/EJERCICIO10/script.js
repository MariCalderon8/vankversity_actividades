/**
 * Cree un programa que almacene los documentos y nombres de diez usuarios, donde a
    cada documento corresponda su respectivo nombre. Imprima todos los nombres de los
    usuarios usando ciclos.
 */

let usuarios = {};

const agregarUsuario = (documento, nombre) => {
    usuarios[documento] = nombre;
}

const mostrarUsuarios = () =>{
    let totalUsuarios = "USUARIOS\n";
    for(const document in usuarios){
        totalUsuarios += `${document}: ${usuarios[document]}\n`
    }
    alert(totalUsuarios)
}

let cantUsuarios = 0;
while (cantUsuarios < 10) {
    let documento = prompt("Ingrese el documento del usuario");
    let nombre = prompt("Ingrese el nombre del usuario");
    agregarUsuario(documento, nombre);
    cantUsuarios++;
}
mostrarUsuarios();