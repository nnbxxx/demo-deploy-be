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
exports.ChangePasswordAuthDto = exports.CodeAuthDto = exports.CreateAuthDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.CreateAuthDto = CreateAuthDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "email không được để trống" }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "password không được để trống" }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "name", void 0);
class CodeAuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, code: { required: true, type: () => String } };
    }
}
exports.CodeAuthDto = CodeAuthDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "email không được để trống" }),
    __metadata("design:type", String)
], CodeAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "code không được để trống" }),
    __metadata("design:type", String)
], CodeAuthDto.prototype, "code", void 0);
class ChangePasswordAuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String }, confirmPassword: { required: true, type: () => String }, email: { required: true, type: () => String } };
    }
}
exports.ChangePasswordAuthDto = ChangePasswordAuthDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "password không được để trống" }),
    __metadata("design:type", String)
], ChangePasswordAuthDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "confirmPassword không được để trống" }),
    __metadata("design:type", String)
], ChangePasswordAuthDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "email không được để trống" }),
    __metadata("design:type", String)
], ChangePasswordAuthDto.prototype, "email", void 0);
//# sourceMappingURL=create-auth.dto.js.map