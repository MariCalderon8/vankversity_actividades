/**
 * Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442:
    "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar
    cuántos usuarios están habilitados.
 */

let objeto = { 183344: "habilitado", 354625: "habilitado", 6762442:
    "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };
    
const imprimirHabilitados = (objeto) =>{
    let contador = 0;
    let usuarios = "";
    for(const key in objeto){
        if(objeto[key] == "habilitado"){
            contador++
            usuarios += key + " ";
        };
    }
    console.log(`Hay ${contador} usuarios habilitados.\nLos usuarios son: ${usuarios}`);
}

imprimirHabilitados(objeto)
    