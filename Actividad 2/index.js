// index.js
// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();
// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
let appRoutes = require('./routes/app');

// Define que configuraciones de rutas se van a utilizar para la ruta
app.use('/', appRoutes);

let exphbs = require('express-handlebars');

const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);
// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(3000,() => {
  console.log('App listening on port 3000! (http://localhost:3000)');
});