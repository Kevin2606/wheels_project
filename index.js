import express from 'express';
import dotenv from "dotenv";

import usuariosRouter from './routers/usuariosRouters.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/usuarios', usuariosRouter);

const SERVER_CONFIG = JSON.parse(process.env.SERVER_CONFIG);
app.listen(SERVER_CONFIG.port, () => {
    console.log(`Server is running on port http://${SERVER_CONFIG.hostname+":"+SERVER_CONFIG.port}`);
});