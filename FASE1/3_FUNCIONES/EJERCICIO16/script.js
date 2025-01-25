/**
 *  Escriba una función que se llame facturacion() La función tiene que recibir como
    parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
    (efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se
    aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
    descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
    10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
    sin importar el medio de pago La función deberá retornar el monto final a pagar.
*/

// PENDIENTE DE REVISAR 
let monto = parseFloat(prompt("Ingrese el valor del producto"));
let medioPago = prompt("Ingrese el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito)");

function facturacion(monto, medioPago){
    let descuento = 0;
    let totalAPagar = 0;
    medioPago = medioPago.toUpperCase();
    if(monto >= 200 && monto < 400 ){
        switch (medioPago) {
            case "E":
                descuento = 0.3;
                break;
            case "D":
                descuento = 0.2;
                break;
            case "C":
                descuento = 0.1;
                break;
            default:
                break;
        }

    } else if(monto >= 400){
        descuento = 0.4;
    }
    totalAPagar = monto - (monto*descuento);
    return totalAPagar;
}


alert(`El total a pagar es: ${facturacion(monto, medioPago)}`)