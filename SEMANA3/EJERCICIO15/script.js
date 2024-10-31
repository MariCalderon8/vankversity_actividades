/**
 * Escriba una función generarContraseña la cual reciba n como parámetro y esta cree
 * una contraseña de n caracteres aleatorios. (Los caracteres pueden ser números,
 * letras o signos).
 */

let num = parseInt(prompt("Ingresa la cantidad de caracteres de la contraseña"));

function generarContrasena(cantidadCaracteres){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|:,.<>?";
    let contrasena = "";
    for (let i = 0; i < cantidadCaracteres; i++) {
        let numAletorio = Math.floor(Math.random() * (caracteres.length));
        contrasena += caracteres.charAt(numAletorio);
    }
    return contrasena;
}

alert(`La nueva contraseña es ${generarContrasena(num)}`);