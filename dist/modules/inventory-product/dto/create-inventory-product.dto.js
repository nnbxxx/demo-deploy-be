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
exports.CreateInventoryProductDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProductVariantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { color: { required: true, type: () => String }, size: { required: false, type: () => String }, material: { required: false, type: () => String }, importPrice: { required: true, type: () => Number, minimum: 0 }, exportPrice: { required: true, type: () => Number, minimum: 0, maximum: 100 }, stock: { required: true, type: () => Number, minimum: 0 }, sellPrice: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Color không được để trống' }),
    __metadata("design:type", String)
], ProductVariantDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductVariantDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductVariantDto.prototype, "material", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: 'Import Price phải là số dương' }),
    (0, class_validator_1.Min)(0, { message: 'Import Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Import Price phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Import Price không được để trống' }),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "importPrice", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: 'Export Price phải là số dương' }),
    (0, class_validator_1.Max)(100, { message: 'Export Price phải là tối đa 100' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Import Price phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Export Price không được để trống' }),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "exportPrice", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: 'Stock phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Stock phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Stock không được để trống' }),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: 'Stock phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Stock phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Stock không được để trống' }),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "sellPrice", void 0);
class StockHistoryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String }, quantity: { required: true, type: () => Number, minimum: 1 }, price: { required: true, type: () => Number, minimum: 1 }, action: { required: true, type: () => Object }, date: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'userId có dạng mongodb id' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId không được để trống' }),
    __metadata("design:type", String)
], StockHistoryDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Quantity phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Quantity phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity không được để trống' }),
    __metadata("design:type", Number)
], StockHistoryDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống' }),
    __metadata("design:type", Number)
], StockHistoryDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['import', 'export'], { message: 'Action phải là "import" hoặc "export"' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Action không được để trống' }),
    __metadata("design:type", String)
], StockHistoryDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Date không được để trống' }),
    __metadata("design:type", String)
], StockHistoryDto.prototype, "date", void 0);
class CreateInventoryProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productId: { required: true, type: () => String }, productVariants: { required: true, type: () => [ProductVariantDto] } };
    }
}
exports.CreateInventoryProductDto = CreateInventoryProductDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'productId có dạng mongodb id' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'productId không được để trống' }),
    __metadata("design:type", String)
], CreateInventoryProductDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Product Variants phải là mảng' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProductVariantDto),
    __metadata("design:type", Array)
], CreateInventoryProductDto.prototype, "productVariants", void 0);
//# sourceMappingURL=create-inventory-product.dto.js.map