var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsNumber, IsEmail, IsString, IsDateString, IsBoolean, IsNotEmpty } from 'class-validator';
import { Consultas } from './consultas.js';
export class Usuario extends Consultas {
    constructor(data) {
        super();
        Object.assign(this, data);
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
