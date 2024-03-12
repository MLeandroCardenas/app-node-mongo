/**
 * controlador
 * @author Michael Leandro
 */

const repuestoScheme = require('../models/repuestos.model');

exports.guardar = async (req, resp) => {
    try {
        const carro = new repuestoScheme(req.body);
        await carro.save();
        resp.status(201).json({
            "code": 201,
            "message": req.body
        });
    } catch (error) {
        if (error.code === 11000) {
            console.error('Duplicate key error. Document already exists!');
            resp.render('carros');
        } else {
            console.error('An error occurred:', error);
        }
    }
}