"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePermissionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, apiPath: { required: true, type: () => String }, method: { required: true, type: () => String }, module: { required: true, type: () => String } };
    }
}
exports.CreatePermissionDto = CreatePermissionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name không được để trống', }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'apiPath không được để trống', }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "apiPath", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'method không được để trống', }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'module không được để trống', }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "module", void 0);
//# sourceMappingURL=create-permission.dto.js.map