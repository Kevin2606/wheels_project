import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty } from 'class-validator';
import conexionDB  from '../db/conexionDB.js';

export class Vehiculo {
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
    cap_pasajeros: number;

    @Expose({ name: 'propietario' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: propietario"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: propietario"}}})
    id_propietario: number;

    @Expose({ name: 'tipo_combustible' })
    @IsNumber({}, {message: ()=> { throw {status:406, message: "El formato del parametro es incorrecto: tipo_combustible"}}})
    @IsNotEmpty({message: ()=>{throw {status:422, message: "Parametro obligatorio: tipo_combustible"}}})
    id_tipo_combustible: number;

    constructor(data: Partial<Vehiculo>) {
        Object.assign(this, data);
    }

    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM vehiculos`);
        return  rows;
    }

    async mostrarPorId(id: number){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM vehiculos WHERE id = ${id}`);
        return  rows[0];
    }

    guardar() {
        return conexionDB().query(
            "INSERT INTO vehiculos SET ?", this, (err: any, result: any) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guardar el usuario" }
                }
                return result;
            }
        ).values;
    }

    async actualizar(id: number){
        const propiedadesNoUndefined = [];
        propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined))
        propiedadesNoUndefined.forEach( async propiedad => {
            return await conexionDB().promise().execute(`UPDATE vehiculos SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Vehiculo actualizado correctamente"};
    }

    async eliminar(id: number){
        await conexionDB().promise().execute(`DELETE FROM vehiculos WHERE id = ${id}`)
        return {message: "Vehiculo eliminado correctamente"}
    }

}