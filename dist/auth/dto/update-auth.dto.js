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
exports.ForgotPassUserDto = exports.UpdateAuthDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auth_dto_1 = require("./create-auth.dto");
const class_validator_1 = require("class-validator");
class UpdateAuthDto extends (0, mapped_types_1.PartialType)(create_auth_dto_1.CreateAuthDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAuthDto = UpdateAuthDto;
class ForgotPassUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.ForgotPassUserDto = ForgotPassUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email phải đúng định dạng' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email không được để trống' }),
    __metadata("design:type", String)
], ForgotPassUserDto.prototype, "email", void 0);
//# sourceMappingURL=update-auth.dto.js.map