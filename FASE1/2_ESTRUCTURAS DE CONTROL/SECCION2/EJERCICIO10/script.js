//Cree un programa que calcule el promedio de 10 números.

let sum = 0;
for (let i = 0; i < 10; i++) {
    let num;
    do {
        num = parseInt(prompt(`Ingresa el numero ${i + 1}`));
    } while (isNaN(num) || num < 0); 
    sum += num;
}

alert(`La suma de los 10 números es ${sum}`);