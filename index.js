import express from 'express';
import dotenv from "dotenv";

import { crearToken, validarToken } from './middlewares/middlewareJWT.js';
import usuariosRouter from './routers/usuariosRouters.js';
import vehiculosRouter from './routers/vehiculosRouters.js';
import usuariosConductoresRouter from './routers/usuariosConductoresRouter.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/api/token', crearToken);
app.use('/api/usuarios', validarToken, usuariosRouter);
app.use('/api/vehiculos', validarToken, vehiculosRouter);
app.use('/api/usuarios-conductores', validarToken,  usuariosConductoresRouter);

const SERVER_CONFIG = JSON.parse(process.env.SERVER_CONFIG);
app.listen(SERVER_CONFIG.port, () => {
    console.log(`Server is running on port http://${SERVER_CONFIG.hostname+":"+SERVER_CONFIG.port}`);
});
