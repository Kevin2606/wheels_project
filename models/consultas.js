import conexionDB from "../db/conexionDB.js";
export class Consultas {
    tablaBDPadre;
    guardar() {
        console.log(this.tablaBDPadre)
        return conexionDB().query(
            `INSERT INTO ${this.tablaBDPadre} SET ?`, this, (err, result) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guarda" }
                }
                return result;
            }
        ).values;
    }
    async mostrar(){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.tablaBDPadre}`);
        return  rows;
    }

    async mostrarPorId(id){ 
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${this.tablaBDPadre} WHERE id = ${id}`);
        return  rows[0];
    }

    // TODO: Corregir el metodo actualizar para que valide las llaves foraneas
    async actualizar(id){
        const propiedadesNoUndefined = [];
        propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined))
        propiedadesNoUndefined.forEach( async propiedad => {
            return await conexionDB().promise().execute(`UPDATE ${this.tablaBDPadre} SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Actualizado correctamente"};
    }

    async eliminar(id){
        await conexionDB().promise().execute(`DELETE FROM ${this.tablaBDPadre} WHERE id = ${id}`)
        return {message: "Eliminado correctamente"}
    }
}