import express from 'express';
import dotenv from 'dotenv';
import router from'./routes/index.js';
import db from './config/db.js';
dotenv.config();



const app = express();

//* Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//* definir Puerto
const PORT = process.env.PORT || 4000;

//* Habilitar PUG
app.set('view engine', 'pug');

//* Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next();
});

//* Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//* Definir la carpeta publica
app.use(express.static('public'));

//* Agregar router
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
 