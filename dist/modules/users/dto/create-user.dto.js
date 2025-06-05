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
exports.UserLoginDto = exports.RegisterUserDto = exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, gender: { required: true, type: () => String } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email không được để trống' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password không được để trống' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
class RegisterUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ngô nguyên bảo', description: 'name' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống', }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uyenbao4a5@gmail.com', description: 'email' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email không đúng định dạng', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email không được để trống', }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'password' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password không được để trống', }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
class UserLoginDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.UserLoginDto = UserLoginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'admin@gmail.com', description: 'username' }),
    __metadata("design:type", String)
], UserLoginDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '123456',
        description: 'password',
    }),
    __metadata("design:type", String)
], UserLoginDto.prototype, "password", void 0);
//# sourceMappingURL=create-user.dto.js.map