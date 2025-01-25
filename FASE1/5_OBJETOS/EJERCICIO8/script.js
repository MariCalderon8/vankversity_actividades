/**
 * Dado el objeto {

    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    }

    Use dos ciclos for-in para recorrer los objetos más internos y mostrar
    sus llaves y valores.
 */

let objeto ={
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}

for(const i in objeto){
    console.log(`Usuario: ${i}`);
    let user = objeto[i]
    for(const key in user){
        console.log(`   ${key}: ${user[key]}`);
    }
    console.log("\n");
}