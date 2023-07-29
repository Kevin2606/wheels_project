import conexionDB from "../db/conexionDB.js";

export class Consultas {
    nomTabla() {
        const diccNombres = {
            Usuario: 'usuarios',
            UsuarioConductor: 'usuarios_conductores',
            Vehiculo: 'vehiculos',
            Ruta: 'rutas',
            Viaje: 'viajes'
        }
        return diccNombres[this.constructor.name];
    }

    guardar() {
        return conexionDB().query(
            `INSERT INTO ${this.nomTabla()} SET ?`, this, (err, result) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guardar" }
                }
                return result;
            }
        ).values;
    }
    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.nomTabla()}`);
        return  rows;
    }

    async mostrarPorId(id){ 
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.nomTabla()} WHERE id = ${id}`);
        return  rows[0];
    }

    // TODO: Corregir el metodo actualizar para que valide las llaves foraneas
    async actualizar(id){
        const propiedadesNoUndefined = [];
        propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined))
        propiedadesNoUndefined.forEach( async propiedad => {
            return await conexionDB().promise().execute(`UPDATE ${this.nomTabla()} SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Actualizado correctamente"};
    }

    async eliminar(id){
        await conexionDB().promise().execute(`DELETE FROM ${this.nomTabla()} WHERE id = ${id}`)
        return {message: "Eliminado correctamente"}
    }
}

