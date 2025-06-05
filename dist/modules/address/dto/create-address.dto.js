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
exports.CreateAddressMultipleDto = exports.CreateAddressDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class Wards {
    static _OPENAPI_METADATA_FACTORY() {
        return { Id: { required: true, type: () => String }, Name: { required: true, type: () => String }, Level: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)({ message: "Id phải là string" }),
    __metadata("design:type", String)
], Wards.prototype, "Id", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    __metadata("design:type", String)
], Wards.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Level phải là string" }),
    __metadata("design:type", String)
], Wards.prototype, "Level", void 0);
class Districts {
    static _OPENAPI_METADATA_FACTORY() {
        return { Id: { required: true, type: () => String }, Name: { required: true, type: () => String }, Wards: { required: true, type: () => [Wards] } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Id không được để trống' }),
    (0, class_validator_1.IsString)({ message: "Id phải là string" }),
    __metadata("design:type", String)
], Districts.prototype, "Id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name không được để trống' }),
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    __metadata("design:type", String)
], Districts.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Wards),
    __metadata("design:type", Array)
], Districts.prototype, "Wards", void 0);
class CreateAddressDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { Districts: { required: true, type: () => [Districts] }, Id: { required: true, type: () => String }, Name: { required: true, type: () => String } };
    }
}
exports.CreateAddressDto = CreateAddressDto;
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Districts),
    __metadata("design:type", Array)
], CreateAddressDto.prototype, "Districts", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Id không được để trống' }),
    (0, class_validator_1.IsString)({ message: "Id phải là string" }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "Id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name không được để trống' }),
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "Name", void 0);
class CreateAddressMultipleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./create-address.dto").CreateAddressDto] } };
    }
}
exports.CreateAddressMultipleDto = CreateAddressMultipleDto;
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateAddressDto),
    __metadata("design:type", Array)
], CreateAddressMultipleDto.prototype, "data", void 0);
//# sourceMappingURL=create-address.dto.js.map