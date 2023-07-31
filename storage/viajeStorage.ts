/*
CREATE TABLE viajes(
    id INT NOT NULL AUTO_INCREMENT,
    id_ruta INT NOT NULL,
    id_pasajero INT NOT NULL,
    hora_inicio TIMESTAMP NOT NULL,
    hora_fin TIMESTAMP NOT NULL,
    lugar_inicio VARCHAR(50) NOT NULL,
    lugar_fin VARCHAR(50) NOT NULL,
    precio FLOAT NOT NULL,
    completado BOOLEAN NOT NULL,
    comentario_pasajero VARCHAR(500) NOT NULL,
    comentario_conductor VARCHAR(500) NOT NULL,
    calificacion_pasajero INT NOT NULL,
    calificacion_conductor INT NOT NULL,
    kilometro_recorrido FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_ruta) REFERENCES rutas(id),
    FOREIGN KEY(id_pasajero) REFERENCES usuarios(id)
);
*/
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty, IsInt } from 'class-validator';
import { Consultas } from '../helpers/consultas.js';

export class Viaje extends Consultas {
    @Expose({ name: 'ruta' })
    @IsInt({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: ruta"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: ruta"}}})
    id_ruta: number;

    @Expose({ name: 'pasajero' })
    @IsInt({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: pasajero"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: pasajero"}}})
    id_pasajero: number;

    @Expose({ name: 'hora_inicio' })
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: hora_inicio"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: hora_inicio"}}})
    hora_inicio: Date;

    @Expose({ name: 'hora_fin' })
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: hora_fin"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: hora_fin"}}})
    hora_fin: Date;

    @Expose({ name: 'lugar_inicio' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: lugar_inicio"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: lugar_inicio"}}})
    lugar_inicio: string;

    @Expose({ name: 'lugar_fin' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: lugar_fin"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: lugar_fin"}}})
    lugar_fin: string;

    @Expose({ name: 'precio' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: precio"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: precio"}}})
    precio: number;

    @Expose({ name: 'completado' })
    @IsBoolean({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: completado"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: completado"}}})
    completado: boolean;

    @Expose({ name: 'comentario_pasajero' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: comentario_pasajero"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: comentario_pasajero"}}})
    comentario_pasajero: string;

    @Expose({ name: 'comentario_conductor' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: comentario_conductor"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: comentario_conductor"}}})
    comentario_conductor: string;

    @Expose({ name: 'calificacion_pasajero' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: calificacion_pasajero"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: calificacion_pasajero"}}})
    calificacion_pasajero: number;

    @Expose({ name: 'calificacion_conductor' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: calificacion_conductor"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: calificacion_conductor"}}})
    calificacion_conductor: number;

    @Expose({ name: 'kilometro_recorrido' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: kilometro_recorrido"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: kilometro_recorrido"}}})
    kilometro_recorrido: number;

    constructor(data: Partial<Viaje>) {
        super();
        Object.assign(this, data);
    }
}