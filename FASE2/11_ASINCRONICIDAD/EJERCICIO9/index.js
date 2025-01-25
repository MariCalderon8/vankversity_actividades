/**
 * Promise.all en una Función Asíncrona
   Escribir una función asíncrona que use Promise.all para esperar varias
   promesas. Por ejemplo, realizar tres búsquedas simuladas (con un retraso
   aleatorio) y mostrar los resultados juntos.
 */

const fakeRequest1 = new Promise((resolve) => {
   const delay = Math.floor(Math.random() * 5000) + 1000;
   setTimeout(() => resolve(`Promesa resuleta luego de ${delay / 1000}s`), delay)
})

const fakeRequest2 = new Promise((resolve) => {
   const delay = Math.floor(Math.random() * 5000) + 1000;
   setTimeout(() => resolve(`Promesa resuleta luego de ${delay / 1000}s`), delay)
})

const fakeRequest3 = new Promise((resolve) => {
   const delay = Math.floor(Math.random() * 5000) + 1000;
   setTimeout(() => resolve(`Promesa resuleta luego de ${delay / 1000}s`), delay)
})

async function makeRequests() {
   Promise.all([fakeRequest1, fakeRequest2, fakeRequest3])
   .then((results) => {
      console.log(results);
   })
}

makeRequests()
