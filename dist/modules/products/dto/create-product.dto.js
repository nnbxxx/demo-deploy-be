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
exports.CreateProductDto = exports.VariantDto = exports.AttributeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class AttributeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, desc: { required: false, type: () => String } };
    }
}
exports.AttributeDto = AttributeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "red", description: "Tên thuộc tính (VD: màu sắc, kích thước...)" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Tên thuộc tính không được để trống" }),
    (0, class_validator_1.IsString)({ message: "Tên thuộc tính phải là chuỗi" }),
    __metadata("design:type", String)
], AttributeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "link_img_red", description: "Mô tả hoặc ảnh minh họa (nếu có)" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Mô tả thuộc tính phải là chuỗi" }),
    __metadata("design:type", String)
], AttributeDto.prototype, "desc", void 0);
class VariantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { attributes: { required: true, type: () => Object } };
    }
}
exports.VariantDto = VariantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: { color: { name: "red", desc: "link_img_red" } }, description: "Thuộc tính biến thể" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Attributes không được để trống" }),
    __metadata("design:type", Object)
], VariantDto.prototype, "attributes", void 0);
class CreateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, category: { required: true, type: () => String }, brand: { required: true, type: () => String }, description: { required: true, type: () => String }, images: { required: true, type: () => [String] }, tags: { required: true, type: () => String }, code: { required: true, type: () => String }, features: { required: true, type: () => [String] }, variants: { required: false, type: () => [require("./create-product.dto").VariantDto] } };
    }
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Áo Thun Nam", description: "Tên sản phẩm" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Tên sản phẩm không được để trống" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "64b76d2a2a3f1c6abc123456", description: "ID danh mục sản phẩm" }),
    (0, class_validator_1.IsMongoId)({ message: "Danh mục không hợp lệ" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Danh mục không được để trống" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "BrandX", description: "Thương hiệu" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Thương hiệu không được để trống" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Sản phẩm thời trang cao cấp", description: "Mô tả sản phẩm" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Mô tả sản phẩm không được để trống" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["image1.jpg", "image2.jpg"], description: "Danh sách hình ảnh" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: "Hình ảnh phải là mảng" }),
    (0, class_validator_1.IsString)({ each: true, message: "Mỗi hình ảnh phải là chuỗi" }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "featured", description: "Thẻ sản phẩm" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Tags không được để trống" }),
    (0, class_validator_1.IsString)({ message: "Tags phải là chuỗi" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "code1234", description: "code sản phẩm" }),
    (0, class_validator_1.IsNotEmpty)({ message: "code không được để trống" }),
    (0, class_validator_1.IsString)({ message: "code phải là chuỗi" }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["color", "size"], description: "Danh sách thuộc tính" }),
    (0, class_validator_1.IsArray)({ message: "Features phải là một mảng" }),
    (0, class_validator_1.IsString)({ each: true, message: "Mỗi feature phải là chuỗi" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Features không được để trống" }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                attributes: {
                    color: { name: "red", desc: "link_img_red" },
                    size: { name: "M" }
                },
            }
        ],
        description: "Danh sách biến thể sản phẩm"
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => VariantDto),
    (0, class_validator_1.IsArray)({ message: "Variants phải là một mảng" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "variants", void 0);
//# sourceMappingURL=create-product.dto.js.map