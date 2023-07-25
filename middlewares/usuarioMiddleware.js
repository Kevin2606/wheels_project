import express from 'express';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import {Usuario} from '../models/usuarioStorage.js';

const proxyUser = express();
proxyUser.use(async(req,res,next)=>{
    try {
        let instanceData = plainToInstance(Usuario, req.body, { excludeExtraneousValues: true });
        req.instanceData = instanceData;
        await validate(instanceData);
        next();
    } catch (err) {
        console.log(err);
        res.status(err.status).json({error: err.message})
    }
})

export default proxyUser;