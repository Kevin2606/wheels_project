import { Router } from 'express';
import conexionDB from '../db/conexionDB.js';
import usuarioMiddleware from '../middlewares/usuarioMiddleware.js';

const router = Router();

router.get('/', usuarioMiddleware, (req, res) => {
    res.json(req.instanceData.all);
});

router.post('/', usuarioMiddleware, (req, res) => {
    res.json(req.instanceData.guardar());
});


/*

(req, res) => {
    req.conDB.query("INSERT INTO usuarios SET ?", req.instanceData, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error en la conexión a la base de datos"
            });
        }
        res.json(result);
    });
}

*/

export default router;