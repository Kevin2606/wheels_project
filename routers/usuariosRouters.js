import { Router } from 'express';
import usuarioMiddleware from '../middlewares/usuarioMiddleware.js';

const router = Router();

const checkExistence = async ({instanceData, params}) => {
    const respuesta = await instanceData.mostrarPorId(params.id)
    return respuesta ? respuesta : undefined;
}

//Mostrar todos los usuarios
router.get('/', usuarioMiddleware, async (req, res) => {
    res.json(await req.instanceData.mostrar());
});

//Mostrar un usuario
router.get('/:id', usuarioMiddleware, async (req, res) => {
    const respuesta = await req.instanceData.mostrarPorId(req.params.id)
    respuesta ? res.json(respuesta) : res.status(404).json({ message: "Usuario no encontrado" });
});

//Guardar un usuario
router.post('/', usuarioMiddleware, async (req, res) => {
    res.json(await req.instanceData.guardar());
});

//Actualizar un usuario
router.put('/:id', usuarioMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.actualizar(req.params.id));
});

//Eliminar un usuario
router.delete('/:id', usuarioMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.eliminar(req.params.id));
});


export default router;