import { Sequelize } from "sequelize";
import db from '../config/db.js';

export const testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});
