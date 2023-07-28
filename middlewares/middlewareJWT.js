import { SignJWT, jwtVerify } from "jose"

const tabla = {
    "usuarios": "usuarios",
    "usuarios-conductores": "usuarios-conductores",
    "vehiculos": "vehiculos"
}

const crearToken = async (req, res) => {
    if (tabla[req.query.tabla] === undefined) return res.status(406).send('No se puede generar el token, especifique una tabla válida')
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ createdByTabla: tabla[req.query.tabla] })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));

    res.send(jwtConstructor);
}

const validarToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(404).send('Falta el token de autorización');
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_SECRET)
        );
        //if (!(jwtData.payload.createdByTabla === req.baseUrl.split('/')[2])) return res.status(401).send('Token no permitido para esta tabla');
        req.payloadJWT = jwtData.payload; 
        next();
    } catch (error) {
        res.status(401).send('No autorizado');
    }

}

export {
    crearToken,
    validarToken
}