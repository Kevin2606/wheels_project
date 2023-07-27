var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Expose } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';
import conexionDB from '../db/conexionDB.js';
export class UsuarioConductor {
    constructor(data) {
        Object.assign(this, data);
    }
    mostrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM usuarios_conductores`);
            return rows;
        });
    }
    mostrarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM usuarios_conductores WHERE id = ${id}`);
            return rows[0];
        });
    }
    guardar() {
        return conexionDB().query("INSERT INTO usuarios_conductores SET ?", this, (err, result) => {
            if (err) {
                console.log(err);
                throw { status: 500, message: "Error al guardar el usuario" };
            }
            return result;
        }).values;
    }
    actualizar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const propiedadesNoUndefined = [];
            propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined));
            propiedadesNoUndefined.forEach((propiedad) => __awaiter(this, void 0, void 0, function* () {
                return yield conexionDB().promise().execute(`UPDATE usuarios_conductores SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]]);
            }));
            return { message: "Usuario actualizado correctamente" };
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDB().promise().execute(`DELETE FROM usuarios_conductores WHERE id = ${id}`);
            return { message: "Usuario eliminado correctamente" };
        });
    }
}
__decorate([
    Expose({ name: 'usuario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: usuario" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: usuario" }; } }),
    __metadata("design:type", Number)
], UsuarioConductor.prototype, "id_usuario", void 0);
__decorate([
    Expose({ name: 'vehiculo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: vehiculo" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: vehiculo" }; } }),
    __metadata("design:type", Number)
], UsuarioConductor.prototype, "id_vehiculo", void 0);
