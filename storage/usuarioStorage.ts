import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty, IsInt } from 'class-validator';
import { Consultas } from '../helpers/consultas.js';
export class Usuario extends Consultas {
/*
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    id_genero INT NOT NULL,
    id_tipo_documento INT NOT NULL,
    numero_documento VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL,
    id_indicativo_pais INT NOT NULL,
    numero_celular VARCHAR(50) NOT NULL,
    conductor BOOLEAN NOT NULL,
    propietario BOOLEAN NOT NULL,
*/
    @Expose({ name: 'nombre' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: nombre"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: nombre"}}})
    nombre: string;

    @Expose({ name: 'apellido' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: apellido"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: apellido"}}})
    apellido: string;

    @Expose({ name: 'genero' })
    @IsInt({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: genero"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: genero"}}})
    id_genero: number;

    @Expose({ name: 'tipo_documento' })
    @IsInt({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: tipo_documento"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: tipo_documento"}}})
    id_tipo_documento: number;

    @Expose({ name: 'numero_documento' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: numero_documento"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: numero_documento"}}})
    numero_documento: string;

    @Expose({ name: 'fecha_nacimiento' })
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: fecha_nacimiento"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: fecha_nacimiento"}}})
    fecha_nacimiento: Date;//yyy-MM-dd

    @Expose({ name: 'correo_electronico' })
    @IsEmail({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: correo_electronico"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: correo_electronico"}}})
    correo_electronico: string;

    @Expose({ name: 'indicativo_pais' })
    @IsInt({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: indicativo_pais"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: indicativo_pais"}}})
    id_indicativo_pais: number;

    @Expose({ name: 'numero_celular' })
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: numero_celular"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: numero_celular"}}})
    numero_celular: string;

    @Expose({ name: 'conductor' })
    @IsBoolean({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: conductor"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: conductor"}}})
    conductor: boolean;

    @Expose({ name: 'propietario' })
    @IsBoolean({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: propietario"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: propietario"}}})
    propietario: boolean;

    constructor(data: Partial<Usuario>) {
        super();
        Object.assign(this, data);
    }
}