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
exports.CreateReceiptDto = exports.ReceiptDetailDTo = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const schema_enum_1 = require("../../../constants/schema.enum");
const swagger_1 = require("@nestjs/swagger");
class ReceiptDetailDTo {
    static _OPENAPI_METADATA_FACTORY() {
        return { product: { required: true, type: () => String }, color: { required: true, type: () => String }, size: { required: true, type: () => String }, material: { required: true, type: () => String }, price: { required: true, type: () => Number, minimum: 1 }, quantity: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.ReceiptDetailDTo = ReceiptDetailDTo;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'productId phải là mongid' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'productId không được để trống' }),
    (0, class_validator_1.IsString)({ message: "productId phải là string" }),
    __metadata("design:type", String)
], ReceiptDetailDTo.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "color phải là string" }),
    __metadata("design:type", String)
], ReceiptDetailDTo.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "size phải là string" }),
    __metadata("design:type", String)
], ReceiptDetailDTo.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "material phải là string" }),
    __metadata("design:type", String)
], ReceiptDetailDTo.prototype, "material", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], ReceiptDetailDTo.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Quantity phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Quantity phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity không được để trống', }),
    __metadata("design:type", Number)
], ReceiptDetailDTo.prototype, "quantity", void 0);
class CreateReceiptDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true, type: () => [require("./create-receipt.dto").ReceiptDetailDTo] }, coupons: { required: true, type: () => [String] }, supplier: { required: true, type: () => String }, notes: { required: true, type: () => String }, address: { required: true, type: () => String }, paymentMethod: { required: true, enum: require("../../../constants/schema.enum").PAYMENT_METHOD } };
    }
}
exports.CreateReceiptDto = CreateReceiptDto;
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ReceiptDetailDTo),
    __metadata("design:type", Array)
], CreateReceiptDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'coupons phải là array' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true, message: "mã coupon phải là string" }),
    __metadata("design:type", Array)
], CreateReceiptDto.prototype, "coupons", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'supplier không được để trống' }),
    (0, class_validator_1.IsString)({ message: "supplier phải là string" }),
    __metadata("design:type", String)
], CreateReceiptDto.prototype, "supplier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "name phải là string" }),
    __metadata("design:type", String)
], CreateReceiptDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Address phải là mongid' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Address không được để trống' }),
    (0, class_validator_1.IsString)({ message: "Address phải là string" }),
    __metadata("design:type", String)
], CreateReceiptDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'paymentMethod không được để trống' }),
    (0, class_validator_1.IsEnum)(schema_enum_1.PAYMENT_METHOD, { message: 'paymentMethod phải là enum ' }),
    (0, swagger_1.ApiProperty)({ example: schema_enum_1.PAYMENT_METHOD.COD, description: 'phương thức thanh toán' }),
    __metadata("design:type", String)
], CreateReceiptDto.prototype, "paymentMethod", void 0);
//# sourceMappingURL=create-receipt.dto.js.map