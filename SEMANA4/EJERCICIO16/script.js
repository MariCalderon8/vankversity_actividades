/**
 * Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán
 * formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la
 * cadena de ADN con mayor número de Timina (T).
 */

// Version Imperativa
function encontrarCadenaConMasTiminas(array){
    let cadenaMayorT = [];
    let contadorMayorT = 0;
    let contador;
    for (let i = 0; i < array.length; i++) {
        contador = 0;
        for (let j = 0; j < array[i].length; j++) {
            if(array[i].charAt(j) == "T"){
                contador++;
            }
            
        }
        if(contador > contadorMayorT){
            contadorMayorT = contador;
            cadenaMayorT = array[i];
        }
    }
    return cadenaMayorT;
}

//Version declarativa
const cadenaConMasTimina = (arr) =>{
    return arr.reduce((maxCadena, cadena) => {
      const contarT = (str) => [...str].filter(letra => letra === 'T').length; 
      return contarT(cadena) > contarT(maxCadena) ? cadena : maxCadena;
    });
  }
const adnCadenas = ["AACCGT", "TTTTGGTA", "GGGGG", "CCCGTAAA"];
console.log(cadenaConMasTimina(adnCadenas));


console.log(encontrarCadenaConMasTiminas(adnCadenas));