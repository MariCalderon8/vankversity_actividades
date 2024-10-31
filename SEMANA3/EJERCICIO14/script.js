/**
 * Escriba una función la cual permita o no la entrada a un parque de atracciones,
 * dicha función recibe la edad, estatura y permiso parental como parámetros. Para
 * permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
 * en caso de ser menor de edad debe contar con un permiso parental para que sea
 * concedido el acceso.
 */

function puedeIngresar(edad, estatura, tienePermiso = false){
    if(estatura >= 150){
        if(edad>=18 || tienePermiso){
            return "Puede ingresar"
        }
        return "No puede ingresar"
    } else {
        return "No puede ingresar"
    }
}

console.log(puedeIngresar(15,160,true));