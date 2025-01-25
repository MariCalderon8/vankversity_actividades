/**
 *  Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
    edad o no.
 */

let edad = parseInt(prompt("Ingrese la edad"));

while(edad < 0 || isNaN(edad)){
    alert("La edad no es válida");
    edad = parseInt(prompt("Ingrese la edad"));
}

if(edad >= 18){
    alert("La persona es mayor de edad");
} else {
    alert("La persona NO es mayor de edad");
}

