const carSchema = require('../models/carro.model');
const carros = [
    {
        modelo: "Mazda 3",
        precio: 20000
    },
    {
        modelo: "Toyota",
        precio: 50000
    },
    {
        modelo: "Toyota",
        precio: 50000
    },
    {
        modelo: "Renault Megan",
        precio: 10000
    },
    {
        modelo: "Hyunday tucson",
        precio: 23000
    },
];
const llantas = [
    {
        modelo: "Senda",
        precio: 20000
    },
    {
        modelo: "Michelin",
        precio: 150000
    },
    {
        modelo: "Good Year",
        precio: 60000
    },
    {
        modelo: "Bridgestone",
        precio: 180000
    },
];

exports.productos = (err, req, resp, next) => {
    // resp.send('hola la ruta inicio funcionó');

    // resp.json({
    //     "message": "exitoso",
    //     "status": 200
    // });
    resp.status(200).json({
        "code": 200,
        "message": carros
    });
}

exports.tiposLlantas = (req, resp) => {
    resp.status(200).json({
        "code": 200,
        "message": llantas
    });
}

exports.guardarCarro = async (req, resp) => {
    try {
        const carro = new carSchema(req.body);
        await carro.save();
        resp.render('index');
    } catch (error) {
        if (error.code === 11000) {
            resp.status(500).json({
                "code": 500,
                "message": "Duplicate key error. Document already exists!"
            });
        } else {
            resp.status(500).json({
                "code": 500,
                "message": "Internal server error"
            });
        }
        throw new Error('Internal server error ', error);
    }
}