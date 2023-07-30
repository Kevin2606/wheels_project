import { Usuario } from "../models/usuarioStorage.js"
import { Vehiculo } from "../models/vehiculoStorage.js"
import { UsuarioConductor } from '../models/usuarioConductorStorage.js';
import { Ruta } from '../models/rutaStorage.js';
import { Viaje } from '../models/viajeStorage.js';

const tablaInstance = {
    "usuarios": Usuario,
    "usuarios-conductores": UsuarioConductor,
    "vehiculos": Vehiculo,
    "rutas": Ruta,
    "viajes": Viaje
}

const tablaJWT = {
    "usuarios": "usuarios",
    "usuarios-conductores": "usuarios-conductores",
    "vehiculos": "vehiculos",
    "rutas": "rutas",
    "viajes": "viajes"
}
export {
    tablaInstance,
    tablaJWT
}