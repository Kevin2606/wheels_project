import { Router } from 'express';
import instanceMiddleware from '../middlewares/instanceMiddleware.js';

const router = Router();

const checkExistence = async ({instanceData, params, nameTabla}) => {
    const respuesta = await instanceData.mostrarPorId(nameTabla, params.id)
    return respuesta ? respuesta : undefined;
}

//Mostrar todos los usuarios
router.get('/', instanceMiddleware, async (req, res) => {
    res.json(await req.instanceData.mostrar(req.nameTabla));
});

//Mostrar un usuario
router.get('/:id', instanceMiddleware, async (req, res) => {
    const respuesta = await req.instanceData.mostrarPorId(req.nameTabla, req.params.id)
    respuesta ? res.json(respuesta) : res.status(404).json({ message: "Usuario no encontrado" });
});

//Guardar un usuario
router.post('/', instanceMiddleware, async (req, res) => {
    res.json(await req.instanceData.guardar(req.nameTabla));
});

//Actualizar un usuario
router.put('/:id', instanceMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.actualizar(req.nameTabla, req.params.id));
});

//Eliminar un usuario
router.delete('/:id', instanceMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.eliminar(req.nameTabla, req.params.id));
});


export default router;