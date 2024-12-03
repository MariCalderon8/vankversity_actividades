/**
 * Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
    precio. Los productos son:
    Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
    objeto anterior con su respectivo producto.
 */

let supermercado = {
    papa: 2500,
    arroz: 2000,
    lentejas: 3100,
    aceite: 5000
}

// //Usando for each
// Object.keys(supermercado).forEach(clave =>{
//     console.log(`${clave}: ${supermercado[clave]}`)
// })

//Usando for in
for(const clave in supermercado){
    console.log(`${clave}: ${supermercado[clave]}`);
}

