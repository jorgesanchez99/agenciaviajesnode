import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, // Nombre del servicio en docker-compose
    dialect: 'postgres',
    port: 5432, // PostgreSQL usa 5432 por defecto
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;
