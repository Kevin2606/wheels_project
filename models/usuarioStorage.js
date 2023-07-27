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
import { IsNumber, IsEmail, IsString, IsDateString, IsBoolean, IsNotEmpty } from 'class-validator';
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
    // TODO: Corregir el metodo actualizar para que valide las llaves foraneas
    actualizar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const propiedadesNoUndefined = [];
            propiedadesNoUndefined.push(...Object.getOwnPropertyNames(this).filter(propiedad => this[propiedad] != undefined));
            propiedadesNoUndefined.forEach((propiedad) => __awaiter(this, void 0, void 0, function* () {
                return yield conexionDB().promise().execute(`UPDATE usuarios SET ${propiedad} = ? WHERE id = ${id}`, [this[propiedad]]);
            }));
            return { message: "Usuario actualizado correctamente" };
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDB().promise().execute(`DELETE FROM usuarios WHERE id = ${id}`);
            return { message: "Usuario eliminado correctamente" };
        });
    }
}
__decorate([
    Expose({ name: 'nombre' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: nombre" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: nombre" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: apellido" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: apellido" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'genero' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: genero" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: genero" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_genero", void 0);
__decorate([
    Expose({ name: 'tipo_documento' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: tipo_documento" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: tipo_documento" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_tipo_documento", void 0);
__decorate([
    Expose({ name: 'numero_documento' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: numero_documento" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: numero_documento" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "numero_documento", void 0);
__decorate([
    Expose({ name: 'fecha_nacimiento' }),
    IsDateString({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: fecha_nacimiento" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: fecha_nacimiento" }; } }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_nacimiento", void 0);
__decorate([
    Expose({ name: 'correo_electronico' }),
    IsEmail({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: correo_electronico" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: correo_electronico" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_electronico", void 0);
__decorate([
    Expose({ name: 'indicativo_pais' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: indicativo_pais" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: indicativo_pais" }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_indicativo_pais", void 0);
__decorate([
    Expose({ name: 'numero_celular' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: numero_celular" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: numero_celular" }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "numero_celular", void 0);
__decorate([
    Expose({ name: 'conductor' }),
    IsBoolean({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: conductor" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: conductor" }; } }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "conductor", void 0);
__decorate([
    Expose({ name: 'propietario' }),
    IsBoolean({ message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: propietario" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: propietario" }; } }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "propietario", void 0);
