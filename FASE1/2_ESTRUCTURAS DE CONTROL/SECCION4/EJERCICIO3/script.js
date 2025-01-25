/**
 * Se trata de implementar un programa que devuelva la cantidad de ocurrencias del dígito que más se repite en
    un número entero no negativo. Por ejemplo, para el caso de 343331 el número que más se repite es 3, por ende
    se debe devolver 4, que es la cantidad de ocurrencias del 3.
 */

let num = parseInt(prompt("Ingrese un número entero positivo"));
while(isNaN(num) || num < 0){
    num = parseInt(prompt("Ingrese un número válido"));
}

let cadena = num.toString();
let maxNumOcurrencias = 0;
let maxOcurrencias = "0";
for (let i = 0; i < cadena.length; i++) {
    let digito = cadena.charAt(i);
    let ocurrencias = 0;
    for (let j = 0; j < cadena.length; j++) {
        if(digito === cadena.charAt(j)) ocurrencias++;
    }

    if(ocurrencias > maxNumOcurrencias){
        maxNumOcurrencias = ocurrencias;
        maxOcurrencias = digito;
    }
}

alert(`El dígito con mayor cantidad de ocurrencias en ${num} es ${maxOcurrencias} con un total de ${maxNumOcurrencias} ocurrencias`);