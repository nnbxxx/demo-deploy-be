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
exports.CreateRoleDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRoleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, permissions: { required: true, type: () => [require("mongoose").Schema.Types.ObjectId] } };
    }
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name không được để trống', }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'description không được để trống', }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'isActive không được để trống', }),
    (0, class_validator_1.IsBoolean)({ message: 'isActive có giá trị boolean' }),
    __metadata("design:type", Boolean)
], CreateRoleDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'permissions không được để trống', }),
    (0, class_validator_1.IsMongoId)({ each: true, message: "each permission là mongo object id" }),
    (0, class_validator_1.IsArray)({ message: 'permissions có định dạng là array', }),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "permissions", void 0);
//# sourceMappingURL=create-role.dto.js.map