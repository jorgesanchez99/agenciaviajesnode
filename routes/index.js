import express from 'express';
import { paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);



//* req -> request -> petición
//* res -> response -> respuesta
//* next -> next -> siguiente

//* send -> envía una respuesta
//* sendFile -> envía un archivo
//* json -> envía un objeto JSON
//* redirect -> redirecciona
//* render -> renderiza una vista

export default router;