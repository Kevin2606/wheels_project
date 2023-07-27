import { Router } from "express";
import vehiculoMiddleware from "../middlewares/vehiculoMiddleware.js";


const router = Router();

const checkExistence = async ({instanceData, params}) => {
    const respuesta = await instanceData.mostrarPorId(params.id)
    return respuesta ? respuesta : undefined;
}

//Mostrar todos los vehiculos
router.get('/', vehiculoMiddleware, async (req, res) => {
    res.json(await req.instanceData.mostrar());
});

//Mostrar un vehiculo
router.get('/:id', vehiculoMiddleware, async (req, res) => {
    const respuesta = await req.instanceData.mostrarPorId(req.params.id)
    respuesta ? res.json(respuesta) : res.status(404).json({ message: "Vehiculo no encontrado" });
});

//Guardar un vehiculo
router.post('/', vehiculoMiddleware, async (req, res) => {
    res.json(await req.instanceData.guardar());
});

//Actualizar un vehiculo
router.put('/:id', vehiculoMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Vehiculo no encontrado" });
    res.json(await req.instanceData.actualizar(req.params.id));
});

//Eliminar un vehiculo
router.delete('/:id', vehiculoMiddleware, async (req, res) => {
    if(!await checkExistence(req)) return res.status(404).json({ message: "Vehiculo no encontrado" });
    res.json(await req.instanceData.eliminar(req.params.id));
});

export default router;