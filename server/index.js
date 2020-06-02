// importar paquetes
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const configs = require('./config');
const connectionDB = require('./config/database');

require('dotenv').config({ path: 'variables.env' })

// configurar express
const app = express();

// Probar autenticacion de la Database
connectionDB.authenticate()
  .then(() => console.log('DB conectada'))
  .catch(error => console.log(error))

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

// Validar enviroment: desarrollo o production
const config = configs[app.get('env')];

// Crear variable para el sitio web
app.locals.title = config.namepageweb;

// Static files Public
app.use(express.static('public'));

// Variables locales: Mostrar el año actual y generar ruta
app.use((request, response, next) => {
  response.locals.currentYear = new Date().getFullYear();
  response.locals.route = request.path;
  return next();
});

// Configurar rutas (Routes)
app.use(require('./routes/'));

// Configurar variables
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');

//Levantar servidor 
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});