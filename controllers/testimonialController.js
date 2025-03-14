import {testimonial} from '../models/Testimoniales.js';
const guardarTestimonial = async (req, res) => {

    // console.log(req.body);
    //* Validar...
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    //* Aplicar expresion regular para validar correo
    const expresion = /\w+@\w+\.[a-z]+/;

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacío' });
    }
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacío' });
    }
    if (!expresion.test(correo)) {
        errores.push({ mensaje: 'El correo no es válido' });
    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacío' });
    }

    if (errores.length > 0) {
        //* Consultar testimoniales existentes
        const testimoniales = await testimonial.findAll();

        //* Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre : nombre.trim(),
            correo : correo.trim(),
            mensaje : mensaje.trim(),
            testimoniales
        })
    } else {
        //* Almacenar en la base de datos
        try {
            await testimonial.create({
                nombre,
                email:correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}