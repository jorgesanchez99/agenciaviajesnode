import { testimonial } from "../models/Testimoniales.js";
import { viaje } from "../models/Viajes.js";


const paginaInicio = async (req, res) => {

    //*Consultar 3 viajes del modelo viaje
    try {

        const [viajes, testimoniales] = await Promise.all([
            viaje.findAll({ limit: 3 }),
            testimonial.findAll({ limit: 3 })
        ]);

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        
    }
    
}

const paginaNosotros = (req, res) => {
    res.render('nosotros',{
        pagina: 'Nosotros'

    });
}

const paginaViajes = async (req, res) => {
    //* COnsultar base de datos
    const viajes = await viaje.findAll()

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes

    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        
    }
    
}

//* Mostrar viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const detallesViaje = await viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Información del Viaje',
            detallesViaje
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} 
