import mysql from "mysql2";

const conexionDB = () => {
    let conDB;
    try{
        conDB = mysql.createPool(JSON.parse(process.env.DB_CONFIG));
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error en la conexión a la base de datos"
        });
    }
    console.log(conDB)
    return conDB;
};

export default conexionDB;