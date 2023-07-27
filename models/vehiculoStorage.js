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
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { Consultas } from './consultas.js';
export class Vehiculo extends Consultas {
    constructor(data) {
        super();
        Object.assign(this, data);
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
    __metadata("design:type", Boolean)
], Vehiculo.prototype, "cap_pasajeros", void 0);
__decorate([
    Expose({ name: 'propietario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: propietario" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: propietario" }; } }),
    __metadata("design:type", Boolean)
], Vehiculo.prototype, "id_propietario", void 0);
__decorate([
    Expose({ name: 'tipo_combustible' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro es incorrecto: tipo_combustible" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "Parametro obligatorio: tipo_combustible" }; } }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_tipo_combustible", void 0);
