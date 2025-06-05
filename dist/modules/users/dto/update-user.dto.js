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
exports.EmailSW = exports.UpdateProfileUser = exports.ProfileUserDtoSwWeb = exports.ProfileUserDtoSw = exports.ProfileUserDto = exports.UpdateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const schema_enum_1 = require("../../../constants/schema.enum");
class UpdateUserDto extends (0, mapped_types_1.OmitType)(create_user_dto_1.CreateUserDto, [
    'password'
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String } };
    }
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "_id", void 0);
class ProfileUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { avatar: { required: true, type: () => String }, name: { required: true, type: () => String }, gender: { required: true, type: () => String }, age: { required: true, type: () => Number } };
    }
}
exports.ProfileUserDto = ProfileUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'avt.com.vn', description: 'avatar' }),
    (0, class_validator_1.IsString)({ message: 'avatar phải là string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProfileUserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống' }),
    __metadata("design:type", String)
], ProfileUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    __metadata("design:type", String)
], ProfileUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    __metadata("design:type", Number)
], ProfileUserDto.prototype, "age", void 0);
class ProfileUserDtoSw {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, gender: { required: true, type: () => String } };
    }
}
exports.ProfileUserDtoSw = ProfileUserDtoSw;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'abc XYZ', description: 'Username' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống' }),
    __metadata("design:type", String)
], ProfileUserDtoSw.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '21', description: 'Age' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Age không được để trống' }),
    __metadata("design:type", Number)
], ProfileUserDtoSw.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female', description: 'Gender' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    __metadata("design:type", String)
], ProfileUserDtoSw.prototype, "gender", void 0);
class ProfileUserDtoSwWeb {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, gender: { required: true, type: () => String }, avatar: { required: true, type: () => String } };
    }
}
exports.ProfileUserDtoSwWeb = ProfileUserDtoSwWeb;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'abc XYZ', description: 'Username' }),
    (0, class_validator_1.IsString)({ message: 'Name phải là string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống' }),
    __metadata("design:type", String)
], ProfileUserDtoSwWeb.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '21', description: 'Age' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Age không được để trống' }),
    __metadata("design:type", Number)
], ProfileUserDtoSwWeb.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: schema_enum_1.TYPE_GENDER.MALE, description: 'Gender' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    (0, class_validator_1.IsEnum)(schema_enum_1.TYPE_GENDER, { message: 'paymentMethod phải là enum ' }),
    __metadata("design:type", String)
], ProfileUserDtoSwWeb.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'avt.com.vn', description: 'avatar' }),
    (0, class_validator_1.IsString)({ message: 'avatar phải là string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProfileUserDtoSwWeb.prototype, "avatar", void 0);
class UpdateProfileUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, gender: { required: true, type: () => String } };
    }
}
exports.UpdateProfileUser = UpdateProfileUser;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'abc XYZ', description: 'Username' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name không được để trống' }),
    __metadata("design:type", String)
], UpdateProfileUser.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female', description: 'Gender' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender không được để trống' }),
    __metadata("design:type", String)
], UpdateProfileUser.prototype, "gender", void 0);
class EmailSW {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.EmailSW = EmailSW;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uyenbao4a5@gmail.com', description: 'Email' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email không được để trống' }),
    __metadata("design:type", String)
], EmailSW.prototype, "email", void 0);
//# sourceMappingURL=update-user.dto.js.map