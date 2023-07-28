import express from 'express';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import { Usuario } from "../models/usuarioStorage.js"
import { Vehiculo } from "../models/vehiculoStorage.js"
import { UsuarioConductor } from '../models/usuarioConductorStorage.js';

const proxyUser = express();

const nameTabla = {
    "usuarios": Usuario,
    "usuarios-conductores": UsuarioConductor,
    "vehiculos": Vehiculo
}

proxyUser.use(async (req,res,next)=>{
    try {
        let instanceData = plainToInstance(nameTabla[req.payloadJWT.createdByTabla], (req.method == 'POST' || req.method == 'PUT') ? req.body : {}, { excludeExtraneousValues: true });
        (req.method == 'POST') ? await validate(instanceData): await validate(instanceData, { skipMissingProperties: true });
        req.instanceData = instanceData;
        next();
    } catch (err) {
        res.status(err.status).json({error: err.message})
    }
})

export default proxyUser;