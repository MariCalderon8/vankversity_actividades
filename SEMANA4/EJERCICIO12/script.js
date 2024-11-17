/**
 * Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] 1
 * arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal
 * manera que los elementos(frutas y verduras) queden en el arreglo que les
 * corresponde. Use ciclos.
 */

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
    if(arreglo1[i] == "Pera" || arreglo1[i] == "Limón"){
        frutas.push(arreglo1[i]);
    } else if(arreglo1[i] == "Cebolla" || arreglo1[i] == "Pimentón" ){
        verduras.push(arreglo1[i]);
    }
}

for (let i = 0; i < arreglo2.length; i++) {
    if(arreglo2[i] == "Manzana" || arreglo1[i] == "Banano"){
        frutas.push(arreglo2[i]);
    } else if(arreglo2[i] == "Lechuga" || arreglo2[i] == "Perejíl" ){
        verduras.push(arreglo2[i]);
    }
}

console.log(`Frutas: ${frutas}`);
console.log(`Verdura: ${verduras}`);