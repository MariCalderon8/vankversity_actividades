/**
 * Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
 * cuadrática correspondiente.
 */

let a = parseInt(prompt("Ingrese el valor de a (diferente de 0)"));
while(isNaN(a) || a == 0){
    a = parseInt(prompt("Por favor ingrese un número válido para a"));
}

let b = parseInt(prompt("Ingrese el valor de b"));
while(isNaN(b)){
    b = parseInt(prompt("Por favor ingrese un número válido para b"));
}

let c = parseInt(prompt("Ingrese el valor de c"));
while(isNaN(c) ){
    c = parseInt(prompt("Por favor ingrese un número válido para c"));
}

let discriminante = b**2 - 4 * a * c;

if(discriminante < 0){
    alert(`a = ${a}  b = ${b}  c = ${c}
    La ecuación cuadrática no tiene solución en los reales`);
} else if(discriminante == 0) {
    alert(`a = ${a}  b = ${b}  c = ${c}
    La solución de la ecuación es: ${(-b + Math.sqrt(discriminante))/2*a}`)
} else if(discriminante > 0){
    alert(`a = ${a}  b = ${b}  c = ${c}
    La ecuación tiene dos soluciones:
        Solución 1: ${(-b + Math.sqrt(discriminante))/2*a}
        Solución 2: ${(-b - Math.sqrt(discriminante))/2*a}`)
}