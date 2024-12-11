/**
 * Se denomina número reversible a aquél que al ser sumado a sí mismo tras invertir sus dígitos da
    como resultado un número en el que todos los dígitos son impares. Por ejemplo, el número 36 es reversible pues
    36 + 63 = 99, y los dos dígitos de 99 son impares. También lo son el 409 y el 904. Crea un programa que reciba
    un número entre 0 y 999 y retorne como salida true si el número es reversible o false si no lo es.
 */

let num = parseInt(prompt("Ingrese un número entre 0 y 999"));

while (isNaN(num) || num < 0 || num > 999) {
    num = parseInt(prompt("Ingrese un número válido"));
}

let reverso = 0;
let temp = num;
while (temp > 0) {
    reverso = reverso * 10 + (temp % 10); // Agrega el último dígito al número invertido.
    temp = Math.floor(temp / 10);
}

const suma = num + reverso;
let esReversible = true;
let sumaTemp = suma;
while (sumaTemp > 0) {
    const digito = sumaTemp % 10;
    if (digito % 2 === 0) {
        esReversible = false;
        break;
    }
    sumaTemp = Math.floor(sumaTemp / 10); // Elimina el último dígito.
}

if(esReversible){
    alert(`El número ${num} ES REVERSIBLE porque ${num} + ${reverso} = ${suma} y todas sus cifras son impares`);
} else {
    alert(`El número ${num} NO ES REVERSIBLE porque ${num} + ${reverso} = ${suma} y sus cifras NO son impares`)
}