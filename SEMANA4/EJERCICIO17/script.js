/**
 * Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro)
para determinar cuáles números son consecutivos con otros, p.e. dos números a y b
son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y
21 son consecutivos porque 20 + 1 = 21.
 */

let array = [5, 7, 90, 2, 5, 3, 8, 99];

array.forEach(i => {
    array.forEach(j => {
        if (i + 1 == j) console.log(`${i} y ${j} son consecutivos`);
    })
})