/**
 *  Escriba una función que tenga una cadena de ADN como parámetro y retorne un
    string con el número de bases en ella, por ejemplo, si la cadena es “AACAGT”
    entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1,
    Cantidad de T: 1”
 */

let cadenaADN = prompt("Ingrese la cadena de ADN");

function contarBases(cadena){
    cadena = cadena.toUpperCase();
    let contadorA = 0;
    let contadorC = 0;
    let contadorG = 0;
    let contadorT = 0;
    let noValido = 0;

    for (let i = 0; i < cadena.length; i++) {
        let base = cadena.charAt(i);
        switch (base) {
            case "A":
                contadorA++;
                break;
            case "C":
                contadorC++;
                break;
            case "G":
                contadorG++;
                break;
            case "T":
                contadorT++;
                break;
            default:
                noValido++;
                break;
        }
    }

    let result = `Cantidad A: ${contadorA}, Cantidad C: ${contadorC}, Cantidad G: ${contadorG}, Cantidad T: ${contadorT}`;
    if (noValido > 0) {
        result += `, Caracteres no válidos: ${noValido}`;
    }
    return result;
}

alert(contarBases(cadenaADN));