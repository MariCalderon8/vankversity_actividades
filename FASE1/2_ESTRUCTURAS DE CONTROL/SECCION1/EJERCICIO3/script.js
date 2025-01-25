/**
 * Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
 * también se debe mostrar al usuario.
 */

let num1 = parseInt(prompt("Ingrese el número 1"));
let num2 = parseInt(prompt("Ingrese el número 2"));

if(num1 > num2){
    alert(`El número 1 (${num1}) es mayor al número 2 (${num2})`);
} else if(num2 > num1){
    alert(`El número 2 (${num2}) es mayor al número 1 (${num1})`);
} else if(num1 === num2){
    alert(`Los números son iguales`);
} else {
    alert("Los datos no son válidos");
}