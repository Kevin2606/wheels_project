import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean } from 'class-validator';
import conexionDB  from '../db/conexionDB.js';
export class Usuario {
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
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: nombre"}}})
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: nombre"}}})
    nombre: string;

    @Expose({ name: 'apellido' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: apellido"}}})
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: apellido"}}})
    apellido: string;

    @Expose({ name: 'genero' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: genero"}}})
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: genero"}}})
    id_genero: number;

    @Expose({ name: 'tipo_documento' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: tipo_documento"}}})
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: tipo_documento"}}})
    id_tipo_documento: number;

    @Expose({ name: 'numero_documento' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: numero_documento"}}})
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: numero_documento"}}})
    numero_documento: string;

    @Expose({ name: 'fecha_nacimiento' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: fecha_nacimiento"}}})
    @IsDateString({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: fecha_nacimiento"}}})
    fecha_nacimiento: Date;//yyy-MM-dd

    @Expose({ name: 'correo_electronico' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: correo_electronico"}}})
    @IsEmail({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: correo_electronico"}}})
    correo_electronico: string;

    @Expose({ name: 'indicativo_pais' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: indicativo_pais"}}})
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: indicativo_pais"}}})
    id_indicativo_pais: number;

    @Expose({ name: 'numero_celular' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: numero_celular"}}})
    @IsString({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: numero_celular"}}})
    numero_celular: string;

    @Expose({ name: 'conductor' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: conductor"}}})
    @IsBoolean({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: conductor"}}})
    conductor: boolean;

    @Expose({ name: 'propietario' })
    @IsDefined({message: ()=>{throw {status:422, message: "Parametro obligatorio: propietario"}}})
    @IsBoolean({message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: propietario"}}})
    propietario: boolean;

    constructor(data: Partial<Usuario>) {
        Object.assign(this, data);
    }

    guardar() {
        return conexionDB().query(
            "INSERT INTO usuarios SET ?", this, (err: any, result: any) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guardar el usuario" }
                }
                return result;
            }
        ).values;
    }
    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM usuarios`);
        return  rows;
    }

    async mostrarPorId(id: number){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM usuarios WHERE id = ${id}`);
        return  rows[0];
    }

    async actualizar(id: number){
        console.log(this)
        const [rows, fields] = await conexionDB().promise().execute(`UPDATE usuarios SET ? WHERE id = ${id}`, this);
        return  rows[0];
    }
}