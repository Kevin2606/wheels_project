import { Router } from "express";
import usuariosConductoresMiddleware from "../middlewares/usuariosConductoresMiddleware.js";

const router = Router();

const checkExistence = async ({instanceData, params}) => {
    const respuesta = await instanceData.mostrarPorId(params.id)
    return respuesta ? respuesta : undefined;
}

//Mostrar todos los usuariosConductores
router.get('/', usuariosConductoresMiddleware, async (req, res) => {
    res.json(await req.instanceData.mostrar());
});

//Mostrar un usuariosConductores
router.get('/:id', usuariosConductoresMiddleware, async (req, res) => {
    const respuesta = await req.instanceData.mostrarPorId(req.params.id)
    respuesta ? res.json(respuesta) : res.status(404).json({ message: "Usuario no encontrado" });
});

//Guardar un usuariosConductores
router.post('/', usuariosConductoresMiddleware, async (req, res) => {
    res.json(await req.instanceData.guardar());
});

//Actualizar un usuariosConductores
router.put('/:id', usuariosConductoresMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.actualizar(req.params.id));
});

//Eliminar un usuariosConductores
router.delete('/:id', usuariosConductoresMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(await req.instanceData.eliminar(req.params.id));
});

export default router;