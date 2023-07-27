import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDateString, IsBoolean, Allow, IsNotEmpty } from 'class-validator';
import conexionDB  from '../db/conexionDB.js';

export class UsuarioConductor {
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
        Object.assign(this, data);
    }

    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM usuarios_conductores`);
        return  rows;
    }

    async mostrarPorId(id: number){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM usuarios_conductores WHERE id = ${id}`);
        return  rows[0];
    }

    guardar() {
        return conexionDB().query(
            "INSERT INTO usuarios_conductores SET ?", this, (err: any, result: any) => {
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
            return await conexionDB().promise().execute(`UPDATE usuarios_conductores SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Usuario actualizado correctamente"};
    }

    async eliminar(id: number){
        await conexionDB().promise().execute(`DELETE FROM usuarios_conductores WHERE id = ${id}`)
        return {message: "Usuario eliminado correctamente"}
    }

}