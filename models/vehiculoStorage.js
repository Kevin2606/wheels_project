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
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import conexionDB from '../db/conexionDB.js';
export class Vehiculo {
    constructor(data) {
        Object.assign(this, data);
    }
    mostrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM vehiculos`);
            return rows;
        });
    }
    mostrarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM vehiculos WHERE id = ${id}`);
            return rows[0];
        });
    }
    guardar() {
        return conexionDB().query("INSERT INTO vehiculos SET ?", this, (err, result) => {
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
                return yield conexionDB().promise().execute(`UPDATE vehiculos SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]]);
            }));
            return { message: "Vehiculo actualizado correctamente" };
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDB().promise().execute(`DELETE FROM vehiculos WHERE id = ${id}`);
            return { message: "Vehiculo eliminado correctamente" };
        });
    }
}
__decorate([
    Expose({ name: 'tipo_vehiculo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: tipo_vehiculo" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: tipo_vehiculo" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_tipos_vehiculo", void 0);
__decorate([
    Expose({ name: 'marca_vehiculo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: marca_vehiculo" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: marca_vehiculo" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_marca_vehiculo", void 0);
__decorate([
    Expose({ name: 'modelo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: modelo" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: modelo" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "modelo", void 0);
__decorate([
    Expose({ name: 'linea' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: linea" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: linea" }; } }),
    __metadata("design:type", String)
], Vehiculo.prototype, "linea", void 0);
__decorate([
    Expose({ name: 'placa' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: placa" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: placa" }; } }),
    __metadata("design:type", String)
], Vehiculo.prototype, "placa", void 0);
__decorate([
    Expose({ name: 'cap_pasajeros' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: cap_pasajeros" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: cap_pasajeros" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "cap_pasajeros", void 0);
__decorate([
    Expose({ name: 'propietario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: propietario" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: propietario" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_propietario", void 0);
__decorate([
    Expose({ name: 'tipo_combustible' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: tipo_combustible" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: tipo_combustible" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_tipo_combustible", void 0);
