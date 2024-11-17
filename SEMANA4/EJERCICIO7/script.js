/**
 * Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por
 * true, cambiar el elemento "qr" por 30 .
 */

let w = ["wc", "jp", "zx", "qr"];

w.splice(1, 1, true);
w.splice(3, 1, 30);

console.log(w);