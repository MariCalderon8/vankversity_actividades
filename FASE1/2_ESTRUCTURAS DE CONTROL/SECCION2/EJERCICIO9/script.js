/**
 * Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
 * S el programa se detendrá, de lo contrario continuará ejecutándose.
 */

let salir = "";

while (salir != "S" && salir != "s") {
    salir = prompt("Desea salir del programa si o no (S/N)")
}