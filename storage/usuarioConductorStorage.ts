import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty } from 'class-validator';
import { Consultas } from '../helpers/consultas.js';

export class UsuarioConductor extends Consultas {
    /*
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_vehiculo INT NOT NULL,
    */

    @Expose({ name: 'usuario' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: usuario"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: usuario"}}})
    id_usuario: number;

    @Expose({ name: 'vehiculo' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: vehiculo"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: vehiculo"}}})
    id_vehiculo: number;

    constructor(data: Partial<UsuarioConductor>) {
        super();
        Object.assign(this, data);
    }
}