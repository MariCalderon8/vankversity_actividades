/**
 * Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
    dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
    cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
 */

let edad = 0;
let aniosFuturos = 0;

while (edad <= 0 || isNaN(edad)) {
    edad = parseInt(prompt("¿Cuántos años tienes?"))
}

while (aniosFuturos <= 0 || isNaN(aniosFuturos)) {
    aniosFuturos = parseInt(prompt("Indica los años en el futuro en los que quieres conocer tu edad"));
}

alert(`Tú edad en ${aniosFuturos} años, será de ${edad + aniosFuturos}`);
