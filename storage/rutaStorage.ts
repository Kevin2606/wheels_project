/*
CREATE TABLE rutas(
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario_conductor INT NOT NULL,
    hora_inicio TIMESTAMP NOT NULL,
    hora_fin TIMESTAMP NOT NULL,
    kilometro_recorrido FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_usuario_conductor) REFERENCES usuarios_conductores(id)
);
*/
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty } from 'class-validator';
import { Consultas } from '../helpers/consultas.js';

export class Ruta extends Consultas {
    @Expose({ name: 'usuario_conductor' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: usuario_conductor"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: usuario_conductor"}}})
    id_usuario_conductor: number;

    @Expose({ name: 'hora_inicio' })
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: hora_inicio"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: hora_inicio"}}})
    hora_inicio: Date;

    @Expose({ name: 'hora_fin' })
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: hora_fin"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: hora_fin"}}})
    hora_fin: Date;

    @Expose({ name: 'kilometro_recorrido' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: kilometro_recorrido"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: kilometro_recorrido"}}})
    kilometro_recorrido: number;

    constructor(data: Partial<Ruta>) {
        super();
        Object.assign(this, data);
    }
    
}