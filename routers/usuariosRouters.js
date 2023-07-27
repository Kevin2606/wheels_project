import { Router } from 'express';
import conexionDB from '../db/conexionDB.js';
import usuarioMiddleware from '../middlewares/usuarioMiddleware.js';

const router = Router();

//Mostrar todos los usuarios
router.get('/', usuarioMiddleware, async (req, res) => {
    console.log(req.params.id)
    res.json(await req.instanceData.mostrar());
});

//Mostrar un usuario
router.get('/:id', usuarioMiddleware, async (req, res) => {
    res.json(await req.instanceData.mostrarPorId(req.params.id));
});

//Guardar un usuario
router.post('/', usuarioMiddleware, (req, res) => {
    res.json(req.instanceData.guardar());
});

//Actualizar un usuario
router.put('/:id', usuarioMiddleware, (req, res) => {
    console.log(req.params.id)
    res.json(req.instanceData.actualizar(req.params.id));
});

//Eliminar un usuario
router.delete('/:id', usuarioMiddleware, (req, res) => {
    res.json(req.instanceData.eliminar(req.params.id));
});

//Eliminar todos los usuarios
router.delete('/eliminarbd', usuarioMiddleware, (req, res) => {
    res.json(req.instanceData.eliminarTodos());
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