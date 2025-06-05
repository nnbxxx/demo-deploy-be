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
exports.UpdateAddressUserDtoSWG = exports.UpdateAddressUserDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_address_user_dto_1 = require("./create-address-user.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateAddressUserDto extends (0, mapped_types_1.PartialType)(create_address_user_dto_1.CreateAddressUserDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String } };
    }
}
exports.UpdateAddressUserDto = UpdateAddressUserDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải có dạng là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateAddressUserDto.prototype, "_id", void 0);
class UpdateAddressUserDtoSWG {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, user: { required: true, type: () => String }, receiver: { required: true, type: () => String }, phone: { required: true, type: () => String }, province: { required: true, type: () => String }, districts: { required: true, type: () => String }, wards: { required: true, type: () => String }, specific: { required: true, type: () => String }, isDefault: { required: true, type: () => Boolean } };
    }
}
exports.UpdateAddressUserDtoSWG = UpdateAddressUserDtoSWG;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải có dạng là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '671b34eb52ab878a12a3004a', description: 'Mã userId' }),
    (0, class_validator_1.IsMongoId)({ message: 'userId phải là mongid' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId không được để trống' }),
    (0, class_validator_1.IsString)({ message: "userId phải là string" }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ngô Nguyên Bảo', description: 'Tên người nhận' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'receiver không được để trống' }),
    (0, class_validator_1.IsString)({ message: "receiver phải là string" }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "receiver", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'phone không được để trống' }),
    (0, class_validator_1.IsString)({ message: "phone phải là string" }),
    (0, swagger_1.ApiProperty)({ example: '0987654321', description: 'Số điện thoại' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'province không được để trống' }),
    (0, class_validator_1.IsString)({ message: "province phải là string" }),
    (0, swagger_1.ApiProperty)({ example: 'Thành phố Hà Nội', description: 'Tên tỉnh/ thành phố' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'districts không được để trống' }),
    (0, class_validator_1.IsString)({ message: "districts phải là string" }),
    (0, swagger_1.ApiProperty)({ example: 'Quận Ba Đình', description: 'Tên quận/ huyện' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "districts", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'wards không được để trống' }),
    (0, class_validator_1.IsString)({ message: "wards phải là string" }),
    (0, swagger_1.ApiProperty)({ example: 'Phường Phúc Xá', description: 'Tên phường/ xã' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "wards", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'địa chỉ chi tiết không được để trống' }),
    (0, class_validator_1.IsString)({ message: "địa chỉ chi tiết phải là string" }),
    (0, swagger_1.ApiProperty)({ example: '1 đường abc xyz', description: 'Tên địa chỉ chi tiết' }),
    __metadata("design:type", String)
], UpdateAddressUserDtoSWG.prototype, "specific", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'isDefault không được để trống' }),
    (0, class_validator_1.IsBoolean)({ message: "isDefault phải là kiểu boolean" }),
    (0, swagger_1.ApiProperty)({ example: false, description: 'Mã userId' }),
    __metadata("design:type", Boolean)
], UpdateAddressUserDtoSWG.prototype, "isDefault", void 0);
//# sourceMappingURL=update-address-user.dto.js.map