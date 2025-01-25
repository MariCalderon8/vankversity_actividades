/**
 * Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la
    clave password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad
    por 34. Imprima el objeto para verificar los cambios.
 */

let user = {password: "admin30905", rol: "admin", edad: 20};
console.log("ANTES");
console.log(user);

user.password = "user_7833";
user.rol = "user";
user.edad = 34;

console.log("\nDESPUÉS:");
console.log(user);