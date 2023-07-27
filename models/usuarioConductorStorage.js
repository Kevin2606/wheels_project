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
import { IsNumber, IsNotEmpty } from 'class-validator';
import { Consultas } from './consultas.js';
export class UsuarioConductor extends Consultas {
    constructor(data) {
        super();
        Object.assign(this, data);
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
