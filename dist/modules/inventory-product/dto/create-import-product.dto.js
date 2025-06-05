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
exports.ImportStockDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ImportVariantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { color: { required: false, type: () => String }, size: { required: false, type: () => String }, material: { required: false, type: () => String }, quantity: { required: true, type: () => Number }, importPrice: { required: true, type: () => Number }, exportPrice: { required: true, type: () => Number }, discount: { required: true, type: () => Number }, sellPrice: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImportVariantDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImportVariantDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImportVariantDto.prototype, "material", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImportVariantDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImportVariantDto.prototype, "importPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImportVariantDto.prototype, "exportPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImportVariantDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ImportVariantDto.prototype, "sellPrice", void 0);
class ImportStockDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productId: { required: true, type: () => String }, variants: { required: true, type: () => [ImportVariantDto] } };
    }
}
exports.ImportStockDto = ImportStockDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ImportStockDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImportVariantDto),
    __metadata("design:type", Array)
], ImportStockDto.prototype, "variants", void 0);
//# sourceMappingURL=create-import-product.dto.js.map