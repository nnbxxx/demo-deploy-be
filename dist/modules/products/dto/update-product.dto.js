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
exports.UpdateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const create_product_dto_1 = require("./create-product.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, name: { required: true, type: () => String }, category: { required: true, type: () => String }, brand: { required: true, type: () => String }, description: { required: true, type: () => String }, images: { required: true, type: () => [String] }, tags: { required: true, type: () => String }, code: { required: true, type: () => String }, features: { required: true, type: () => [String] }, variants: { required: false, type: () => [require("./create-product.dto").VariantDto] } };
    }
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '000001', description: 'mã product' }),
    (0, class_validator_1.IsMongoId)({ message: '_id có dạng mongodb id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'dior 0001', description: 'Tên product' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tên sản phẩm không được để trống', }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'aaaaaaaaaa', description: 'mã category' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category sản phẩm không được để trống', }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'dior', description: 'tên thương hiệu' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Brand không được để trống', }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mô tả sản phẩm', description: 'mô tả sản phẩm' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description không được để trống', }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: ['abc.xyz.com.vn'], description: 'ảnh' }),
    (0, class_validator_1.IsArray)({ message: 'Images phải là array' }),
    (0, class_validator_1.IsString)({ each: true, message: "Image phải là string" }),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "featured", description: "Thẻ sản phẩm" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Tags phải là chuỗi" }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "code1234", description: "code sản phẩm" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "code phải là chuỗi" }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["color", "size"], description: "Danh sách thuộc tính" }),
    (0, class_validator_1.IsArray)({ message: "Features phải là một mảng" }),
    (0, class_validator_1.IsString)({ each: true, message: "Mỗi feature phải là chuỗi" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "features", void 0);
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
    (0, class_transformer_1.Type)(() => create_product_dto_1.VariantDto),
    (0, class_validator_1.IsArray)({ message: "Variants phải là một mảng" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "variants", void 0);
//# sourceMappingURL=update-product.dto.js.map