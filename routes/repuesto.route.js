/**
 * ruta
 * @author Michael Leandro
 */

const express = require('express');
const api = express.Router();

const repuestoController = require('../controllers/repuestos.controller');

api.post('/repuestos', repuestoController.guardar);

module.exports = api;