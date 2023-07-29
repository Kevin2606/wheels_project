import express from 'express';
import dotenv from "dotenv";

import  generalRouters from './routers/generalRouters.js';
import { crearToken, validarToken } from './middlewares/middlewareJWT.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/api/token', crearToken);
app.use('/api/usuarios', validarToken, generalRouters);
app.use('/api/vehiculos', validarToken, generalRouters);
app.use('/api/usuarios-conductores', validarToken,  generalRouters);
app.use('/api/rutas', validarToken, generalRouters);
app.use('/api/viajes', validarToken, generalRouters);

const SERVER_CONFIG = JSON.parse(process.env.SERVER_CONFIG);
app.listen(SERVER_CONFIG.port, () => {
    console.log(`Server is running on port http://${SERVER_CONFIG.hostname+":"+SERVER_CONFIG.port}`);
});
