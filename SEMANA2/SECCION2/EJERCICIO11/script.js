/**
 * Cree un programa que muestre el promedio de n números, dejándose de solicitar números
 * cuando se introduzca el cero. 243248
 */
let promedio = 0;
let contador = 0;
let num;

do {
    do {
        num = parseInt(prompt(`Ingrese el número ${contador + 1} (Introduzca el 0 para detener la ejecución y calcular el promedio)`));
    } while (isNaN(num));

    if(num !== 0){
        promedio += num;
        contador++;
    }

} while (num != 0);

alert(`El promedio de los numeros es ${promedio / contador}`);