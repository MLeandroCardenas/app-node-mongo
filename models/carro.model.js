const mongoose = require('mongoose');

const carScheme = new mongoose.Schema({
    matricula: String,
    modelo: String,
    marca: String,
    placa: {
        type: String,
        index: true,
        unique: true,
        sparse: true
    },
    active: Boolean
});

module.exports = mongoose.model( 'car', carScheme );