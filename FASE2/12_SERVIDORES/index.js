import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:
        true
})); 


//EJERCICIO1
app.post('/ejercicio1', function (req, res) {
    let cabecera = req.header("Content-Type");
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    return res.status(200).json({
        "Status": "Usuario registrado",
        cabecera: cabecera,
        nombre: nombre,
        apellido: apellido,
        edad: edad
    });
});


//EJERCICIO2
app.get('/ejercicio2/:id', function (req, res) {
    let id = req.params.id;
    return res.status(200).json({
        "Status": "Categoría consultada",
        categoria: req.query.categoria || "Sin categoria",
        id: id
    });
});

//EJERCICIO3
app.post('/ejercicio3', function (req, res) {
    let cabecera = req.header("Content-Type");
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let stock = req.body.stock;
    return res.status(200).json({
        "Status": "Descuento guardado",
        nombre: nombre,
        stock: stock,
        precio: precio,
        descuento: parseFloat(req.query.descuento) || 0
    });
});

//EJERCICIO4
app.get('/ejercicio4/:ciudad', function (req, res) {
    let ciudad = req.params.ciudad;
    return res.status(200).json({
        "Status": "ok",
        ciudad: ciudad
    })
})

//EJERCICIO5
app.post('/ejercicio5', function (req, res) {
    let cabecera = req.header("Content-Type");
    let nombre = req.body.nombre;
    let habitacion = req.body.habitacion;
    let noches = req.body.noches;
    let fecha = req.query.fecha

    return res.status(200).json({
        "Status": "Reserva creada",
        fecha: fecha || new Date().toDateString(),
        nombre: nombre,
        habitacion: habitacion,
        noches: noches
    })

})

//EJERCICIO6
app.get('/ejercicio6/:id', function (req, res) {
    let autorizacion = req.header("Authorization");
    return res.status(200).json({
        "Status": "Acceso concedido",
        id: req.params.id,
        autorizacion: autorizacion
    })
})

//EJERCICIO7
app.post('/ejercicio7', function (req, res) {
    let producto = req.body.producto;
    let cantidad = req.body.cantidad;
    let direccion = req.body.direccion;
    let envio = req.query.envio;
    return res.status(200).json({
        "Status": "Envío registrado",
        producto: producto,
        cantidad: cantidad,
        direccion: direccion,
        envio: envio
    })
})

//EJERCICIO8
app.get('/ejercicio8/:usuario', function (req, res) {
    let usuario = req.params.usuario;
    let rol = req.query.rol;
    return res.status(200).json({
        "Status": "Usuario encontrado",
        usuario: usuario,
        rol: rol
    })
})

//EJERCICIO9
app.post('/ejercicio9/', function (req, res) {
    let contentType = req.header("Content-Type");
    let xEventType = req.header("X-Event-Type");
    
    let nombre = req.body.nombre;
    let fecha = req.body.fecha;
    let lugar = req.body.lugar;
    return res.status(200).json({
        "Status": "Evento registrado",
        header: {
            contentType: contentType,
            xEventType: xEventType
        },
        nombre: nombre,
        fecha: fecha,
        lugar: lugar,
    })
})

//EJERCICIO10
app.get('/ejercicio10/:libro', function (req, res) {
    let libro = req.params.libro;

    return res.status(200).json({
        "Status": "Libro encontrado",
        libro: libro
    })
})

//EJERCICIO11
app.post('/ejercicio11', function (req, res) {
    let departamento = req.query.departamento;
    let nombre = req.body.nombre;
    let puesto = req.body.puesto;
    let salario = req.body.salario;

    return res.status(200).json({
        "Status": "Usuario registrado",
        nombre: nombre,
        puesto: puesto,
        salario: salario,
        departamento: departamento
    })
})

// EJERCICIO12
app.get('/ejercicio12/:vehiculo', function (req, res) {
    let vehiculo = req.params.vehiculo;
    let color = req.query.color;
    return res.status(200).json({
        "Status": "Vehiculo encontrado",
        vehiculo: vehiculo,
        color: color
    })
})

// EJERCICIO13
app.post('/ejercicio13', function (req, res) {
    let contentType = req.header("Content-Type");
    let clientID = req.header("X-Client-ID");

    let numero = req.body.numero;
    let fecha = req.body.fecha;
    let monto = req.body.monto;

    return res.status(200).json({
        "Status": "Transacción éxitosa",
        header: {
            contentType: contentType,
            clientID: clienteID
        },
        numero: numero,
        monto: monto,
        fecha: fecha
    })
})

// EJERCICIO14
app.get('/ejercicio14/:pelicula', function (req, res) {
    let pelicula = req.params.pelicula;

    return res.status(200).json({
        "Status": "Pelicula encontrada",
        pelicula: pelicula
    })
})

// EJERCICIO15
app.post('/ejercicio15', function (req, res) {
    let header = req.header("Content-Type");
    let clase = req.query.clase;
    let numVuelo = req.body.numero_vuelo;
    let origen = req.body.origen;
    let destino = req.body.destino

    return res.status(200).json({
        "Status": "Vuelo registrado",
        header: header,
        numero_vuelo: numVuelo,
        origen: origen,
        destino: destino,
        clase: clase
    })
})

// EJERCICIO16
app.get('/ejercicio16/:suscripcion', function (req, res) {
    let userID = req.header("X-User-ID");
    let suscripcion = req.params.suscripcion;

    return res.status(200).json({
        "Status": "Suscripcion encontrada",
        X_User_ID: userID,
        suscripcion: suscripcion
    })
})

// EJERCICIO17
app.post('/ejercicio17', function (req, res) {
    let header = req.header("Content-Type");
    let monto = req.body.monto;
    let fecha = req.body.fecha;
    let destinatario = req.body.destinatario;
    let moneda = req.query.moneda;

    return res.status(200).json({
        "Status": "Transacción éxitosa",
        header: header,
        monto: monto,
        fecha: fecha,
        destinatario: destinatario,
        moneda: moneda
    })
})

// EJERCICIO18
app.get('/ejercicio18/:ticket', function (req, res) {
    let ticket = req.params.ticket;

    return res.status(200).json({
        "Status": "Ticket encontrado",
        ticket: ticket
    })
})

// EJERCICIO19
app.post('/ejercicio19', function (req, res) {
    let contentType = req.header("Content-Type");
    let libraryID = req.header("X-Library-ID");

    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let anio = req.body.año;

    return res.status(200).json({
        "Status": "Libro registrado",
        header: {
            contentType: contentType,
            libraryID: libraryID
        },
        titulo: titulo,
        autor: autor,
        año: anio
    })
})

// EJERCICIO20
app.get('/ejercicio20/:evento', function (req, res) {
    let evento = req.params.evento;
    let fecha = req.query.fecha;

    return res.status(200).json({
        "Status": "Evento encontrado",
        evento: evento,
        fecha: fecha
    })
})


    
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});