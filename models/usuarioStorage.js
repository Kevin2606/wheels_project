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
import { IsDefined, IsNumber, IsEmail, IsString, IsDateString, IsBoolean } from 'class-validator';
import conexionDB from '../db/conexionDB.js';
export class Usuario {
    constructor(data) {
        Object.assign(this, data);
    }
    guardar() {
        return conexionDB().query("INSERT INTO usuarios SET ?", this, (err, result) => {
            if (err) {
                console.log(err);
                throw { status: 500, message: "Error al guardar el usuario" };
            }
            return result;
        }).values;
    }
    mostrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM usuarios`);
            return rows;
        });
    }
    mostrarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield conexionDB().promise().execute(`SELECT * FROM usuarios WHERE id = ${id}`);
            return rows[0];
        });
    }
    actualizar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this);
            const [rows, fields] = yield conexionDB().promise().execute(`UPDATE usuarios SET ? WHERE id = ${id}`, this);
            return rows[0];
        });
    }
}
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: nombre" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: nombre" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: apellido" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: apellido" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'genero' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: genero" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: genero" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_genero", void 0);
__decorate([
    Expose({ name: 'tipo_documento' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: tipo_documento" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: tipo_documento" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_tipo_documento", void 0);
__decorate([
    Expose({ name: 'numero_documento' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: numero_documento" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: numero_documento" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "numero_documento", void 0);
__decorate([
    Expose({ name: 'fecha_nacimiento' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: fecha_nacimiento" }; } }),
    IsDateString({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: fecha_nacimiento" }; } }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_nacimiento", void 0);
__decorate([
    Expose({ name: 'correo_electronico' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: correo_electronico" }; } }),
    IsEmail({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: correo_electronico" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_electronico", void 0);
__decorate([
    Expose({ name: 'indicativo_pais' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: indicativo_pais" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: indicativo_pais" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_indicativo_pais", void 0);
__decorate([
    Expose({ name: 'numero_celular' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: numero_celular" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: numero_celular" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "numero_celular", void 0);
__decorate([
    Expose({ name: 'conductor' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: conductor" }; } }),
    IsBoolean({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: conductor" }; } }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "conductor", void 0);
__decorate([
    Expose({ name: 'propietario' }),
    IsDefined({ message: () => { throw { status: 422, message: "Parametro obligatorio: propietario" }; } }),
    IsBoolean({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: propietario" }; } }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "propietario", void 0);
