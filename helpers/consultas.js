import conexionDB from "../db/conexionDB.js";

export class Consultas {
    guardar(tablaBDPadre) {
        return conexionDB().query(
            `INSERT INTO ${tablaBDPadre} SET ?`, this, (err, result) => {
                if (err) {
                    console.log(err)
                    throw { status: 500, message: "Error al guarda" }
                }
                return result;
            }
        ).values;
    }
    async mostrar(tablaBDPadre){
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${tablaBDPadre}`);
        return  rows;
    }

    async mostrarPorId(tablaBDPadre, id){ 
        const [rows, fields] = await conexionDB().promise().execute(`SELECT * FROM ${tablaBDPadre} WHERE id = ${id}`);
        return  rows[0];
    }

    // TODO: Corregir el metodo actualizar para que valide las llaves foraneas
    async actualizar(tablaBDPadre, id){
        const propiedadesNoUndefined = [];
        propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined))
        propiedadesNoUndefined.forEach( async propiedad => {
            return await conexionDB().promise().execute(`UPDATE ${tablaBDPadre} SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]])
        });
        return {message: "Actualizado correctamente"};
    }

    async eliminar(tablaBDPadre, id){
        await conexionDB().promise().execute(`DELETE FROM ${tablaBDPadre} WHERE id = ${id}`)
        return {message: "Eliminado correctamente"}
    }
}

