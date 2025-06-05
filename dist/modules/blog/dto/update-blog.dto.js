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
exports.UpdateBlogDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateBlogDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, category: { required: true, type: () => String }, images: { required: true, type: () => [String] } };
    }
}
exports.UpdateBlogDto = UpdateBlogDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải có dạng là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hoàng bào, vật dụng cung đình triều Nguyễn ở Sài Gòn', description: 'Tiêu đề' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tên sản phẩm không được để trống', }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hoàng bào, vật dụng cung đình triều Nguyễn ở Sài Gòn', description: 'Tiêu đề' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tên sản phẩm không được để trống', }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'abcxyz', description: 'mã category' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category sản phẩm không được để trống', }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: ['abc.xyz.com.vn'], description: 'ảnh' }),
    (0, class_validator_1.IsArray)({ message: 'Images phải là array' }),
    (0, class_validator_1.IsString)({ each: true, message: "Image phải là string" }),
    __metadata("design:type", Array)
], UpdateBlogDto.prototype, "images", void 0);
//# sourceMappingURL=update-blog.dto.js.map