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
exports.IdSW = exports.AddressReceipt = exports.ReceiptItem = exports.ReceiptAdd = exports.UpdateReceiptDto = exports.UpdateStatusDto = void 0;
const openapi = require("@nestjs/swagger");
const create_receipt_dto_1 = require("./create-receipt.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const schema_enum_1 = require("../../../constants/schema.enum");
const swagger_1 = require("@nestjs/swagger");
class UpdateStatusDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, statusSupplier: { required: true, type: () => String } };
    }
}
exports.UpdateStatusDto = UpdateStatusDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateStatusDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schema_enum_1.RECEIPT_STATUS, { message: 'statusSupplier không được hợp lệ' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'statusSupplier không được để trống' }),
    __metadata("design:type", String)
], UpdateStatusDto.prototype, "statusSupplier", void 0);
class UpdateReceiptDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, items: { required: true, type: () => [require("./create-receipt.dto").ReceiptDetailDTo] }, supplier: { required: true, type: () => String }, notes: { required: true, type: () => String }, statusUser: { required: true, type: () => String }, statusSupplier: { required: true, type: () => String }, address: { required: true, type: () => ({ province: { required: true, type: () => String }, district: { required: true, type: () => String }, ward: { required: true, type: () => String }, detail: { required: true, type: () => String } }) } };
    }
}
exports.UpdateReceiptDto = UpdateReceiptDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateReceiptDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_receipt_dto_1.ReceiptDetailDTo),
    __metadata("design:type", Array)
], UpdateReceiptDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'supplier không được để trống' }),
    (0, class_validator_1.IsString)({ message: "supplier phải là string" }),
    __metadata("design:type", String)
], UpdateReceiptDto.prototype, "supplier", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'supplier không được để trống' }),
    __metadata("design:type", String)
], UpdateReceiptDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schema_enum_1.RECEIPT_STATUS, { message: 'statusUser không được hợp lệ' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'statusUser không được để trống' }),
    __metadata("design:type", String)
], UpdateReceiptDto.prototype, "statusUser", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schema_enum_1.RECEIPT_STATUS, { message: 'statusSupplier không được hợp lệ' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'statusSupplier không được để trống' }),
    __metadata("design:type", String)
], UpdateReceiptDto.prototype, "statusSupplier", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressReceipt),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateReceiptDto.prototype, "address", void 0);
class ReceiptAdd {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, color: { required: true, type: () => String }, size: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number, minimum: 1 }, quantity: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.ReceiptAdd = ReceiptAdd;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], ReceiptAdd.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReceiptAdd.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReceiptAdd.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name không được để trống' }),
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    __metadata("design:type", String)
], ReceiptAdd.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], ReceiptAdd.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Quantity phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Quantity phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity không được để trống', }),
    __metadata("design:type", Number)
], ReceiptAdd.prototype, "quantity", void 0);
class ReceiptItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { product: { required: true, type: () => ({ _id: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, color: { required: true, type: () => String }, size: { required: true, type: () => String } }) } };
    }
}
exports.ReceiptItem = ReceiptItem;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ReceiptAdd),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], ReceiptItem.prototype, "product", void 0);
class AddressReceipt {
    static _OPENAPI_METADATA_FACTORY() {
        return { province: { required: true, type: () => String }, district: { required: true, type: () => String }, ward: { required: true, type: () => String }, detail: { required: true, type: () => String } };
    }
}
exports.AddressReceipt = AddressReceipt;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'province không được để trống' }),
    (0, class_validator_1.IsString)({ message: "province phải là string" }),
    __metadata("design:type", String)
], AddressReceipt.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'district không được để trống' }),
    (0, class_validator_1.IsString)({ message: "district phải là string" }),
    __metadata("design:type", String)
], AddressReceipt.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'ward không được để trống' }),
    (0, class_validator_1.IsString)({ message: "ward phải là string" }),
    __metadata("design:type", String)
], AddressReceipt.prototype, "ward", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'detail không được để trống' }),
    (0, class_validator_1.IsString)({ message: "detail phải là string" }),
    __metadata("design:type", String)
], AddressReceipt.prototype, "detail", void 0);
class IdSW {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String } };
    }
}
exports.IdSW = IdSW;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '66fc6cc09bc7b3960846313f', description: 'Id ' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Id không được để trống' }),
    __metadata("design:type", String)
], IdSW.prototype, "id", void 0);
//# sourceMappingURL=update-receipt.dto.js.map