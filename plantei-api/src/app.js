import express from "express";
import routes from './routes/routes.js';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors'
import 'dotenv/config'; 

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {

    constructor() {

        this.server = express()
        this.connectDatabase(); // Calls the function to connect to the database
        this.middlewares();     // Configure the middleware
        this.routes();          // Configure the routes
    }

    connectDatabase() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DB, MONGO_OPTIONS } = process.env;

        const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?${MONGO_OPTIONS}`;

        mongoose.connect(uri)
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch(err => {
                console.error('Connection error', err);
                setTimeout(() => this.connectDatabase(), 5000);
            });
    }
    middlewares() {
        // Any domain and person make a request to the api
        this.server.use(cors())

        this.server.use(
            "/files",
            express.static(path.resolve(__dirname, '../uploads'))
        )
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

}
export default new App().server