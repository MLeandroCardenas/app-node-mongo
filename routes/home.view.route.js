const express = require('express');
const api = express.Router();

const homeViewController = require('../controllers/home.view.controller');

api.get('/inicio', homeViewController.carrosHome);
api.get('/carros', homeViewController.mostrarCarros);

module.exports = api;