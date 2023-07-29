import conexionDB from "../db/conexionDB.js";

export class Consultas {
    nomTabla() {
        const diccNombres = {
            Usuario: 'usuarios',
            UsuarioConductor: 'usuarios_conductores',
            Vehiculo: 'vehiculos'
        }
        return diccNombres[this.constructor.name];
    }

    guardar() {
        return conexionDB().query(
            `INSERT INTO ${this.diccNombres()} SET ?`, this, (err, result) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guarda" }
                }
                return result;
            }
        ).values;
    }
    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.diccNombres()}`);
        return  rows;
    }

    async mostrarPorId(id){ 
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.diccNombres()} WHERE id = ${id}`);
        return  rows[0];
    }

    // TODO: Corregir el metodo actualizar para que valide las llaves foraneas
    async actualizar(id){
        const propiedadesNoUndefined = [];
        propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined))
        propiedadesNoUndefined.forEach( async propiedad => {
            return await conexionDB().promise().execute(`UPDATE ${this.diccNombres()} SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Actualizado correctamente"};
    }

    async eliminar(id){
        await conexionDB().promise().execute(`DELETE FROM ${this.diccNombres()} WHERE id = ${id}`)
        return {message: "Eliminado correctamente"}
    }
}

