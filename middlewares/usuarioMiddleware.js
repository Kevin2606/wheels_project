import express from 'express';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import {Usuario} from '../models/usuarioStorage.js';

const proxyUser = express();
const methods = {'GET': 'GET','POST':'POST','PUT':'PUT','DELETE':'DELETE'};

proxyUser.use((req,res,next)=>{
    try {
        let instanceData = plainToInstance(Usuario, req.body, { excludeExtraneousValues: true });
        (methods[req.method] === 'POST' || methods[req.method] === 'PUT') ? async () => await validate(instanceData) : async () => await validate(instanceData, { skipMissingProperties: true });
        req.instanceData = instanceData;
        next();
    } catch (err) {
        console.log(err);
        res.status(err.status).json({error: err.message})
    }
})

export default proxyUser;