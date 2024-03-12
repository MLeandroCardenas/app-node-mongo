/**
 * modelo
 * @author Michael Leandro
 */

const mongoose = require('mongoose');

const repuestoScheme = new mongoose.Schema({
    tipo: String,
    marca: String,
    autosCompatibles: [String],
    peso: Number,
    precio: Number,
    material: String,
    stock: Number,
    estado: String
});

module.exports = mongoose.model( 'repuesto', repuestoScheme );