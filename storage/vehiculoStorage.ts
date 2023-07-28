import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty } from 'class-validator';
import { Consultas } from '../helpers/consultas.js';

export class Vehiculo extends Consultas {
/*     CREATE TABLE vehiculos(
        id INT NOT NULL AUTO_INCREMENT,
        id_tipos_vehiculo INT NOT NULL,
        id_marca_vehiculo INT NOT NULL,
        modelo INT NOT NULL,
        linea VARCHAR(50) NOT NULL,
        placa VARCHAR(6) NOT NULL,
        cap_pasajeros INT NOT NULL,
        id_propietario INT NOT NULL,
        id_tipo_combustible INT NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(id_tipos_vehiculo) REFERENCES tipos_vehiculos(id),
        FOREIGN KEY(id_marca_vehiculo) REFERENCES marcas_vehiculos(id),
        FOREIGN KEY(id_propietario) REFERENCES usuarios(id),
        FOREIGN KEY(id_tipo_combustible) REFERENCES tipos_combustible(id)
    ); */

    @Expose({ name: 'tipo_vehiculo' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: tipo_vehiculo"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: tipo_vehiculo"}}})
    id_tipos_vehiculo: number;

    @Expose({ name: 'marca_vehiculo' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: marca_vehiculo"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: marca_vehiculo"}}})
    id_marca_vehiculo: number;

    @Expose({ name: 'modelo' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: modelo"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: modelo"}}})
    modelo: number;

    @Expose({ name: 'linea' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: linea"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: linea"}}})
    linea: string;

    @Expose({ name: 'placa' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: placa"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: placa"}}})
    placa: string;

    @Expose({ name: 'cap_pasajeros' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: cap_pasajeros"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: cap_pasajeros"}}})
    cap_pasajeros: boolean;

    @Expose({ name: 'propietario' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: propietario"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: propietario"}}})
    id_propietario: boolean;

    @Expose({ name: 'tipo_combustible' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: tipo_combustible"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: tipo_combustible"}}})
    id_tipo_combustible: number;

    constructor(data: Partial<Vehiculo>) {
        super();
        Object.assign(this, data);
    }
}