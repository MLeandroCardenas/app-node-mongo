/**
 * Archivo de configuracion de base de datos y exposicion del puerto
 * @author Michael Leandro
 */
const mongoose = require('mongoose');

const {app, puerto} = require('./app');
const { PORT_DB, IP_SERVER } = require('./config');


// conexion a la base de datos
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/carros`)
    .then( () =>  {
        console.log('Conectado a la base de datos ...');
        // Solo si la conexion a la base de datos es correcta se expone el puerto de la aplicación de node
        app.listen(puerto);
    })
    .catch(err => {
        console.log('error al conectarse a la base de datos ', err);
        throw new Error('Problema de conexion a la base de datos ... ');
    });
