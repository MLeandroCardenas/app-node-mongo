const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    identificacion: {
        type: String,
        index: true,
        unique: true,
        sparse: true
    },
    active: Boolean
});

module.exports = mongoose.model( 'user', userSchema );