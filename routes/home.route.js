const express = require('express');
const api = express.Router();

const homeController = require('../controllers/home.controller');

api.get('/carros', homeController.productos);
api.get('/carros/llantas', homeController.tiposLlantas);
api.post('/nuevo-carro', homeController.guardarCarro);

module.exports = api;