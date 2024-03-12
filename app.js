/**
 * Archivo de configuracion
 * @author Michael Leandro
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoutes = require('./routes/home.route');
const repuestosRoutes = require('./routes/repuesto.route');

const homeRoutesView = require('./routes/home.view.route');
const { API_VERSION } = require('./config')

/**
 * Crear app en express
 */
const puerto = 4000;

// inicializar express
const app = express();

// configuracion del body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configurar archivos para la vista
app.set( 'view engine', 'pug' );

// agregar carpetas donde se guardaran archivos del front (html, pug ...)
app.set( 'views', path.join(__dirname, './views') );

// habilitar archivos estaticos
app.use(express.static('public'));

// llamar rutas
app.use(`/api/${API_VERSION}`, homeRoutes);
app.use(`/`, homeRoutesView);

app.use(`/api/${API_VERSION}`, repuestosRoutes);

module.exports = {app, puerto};