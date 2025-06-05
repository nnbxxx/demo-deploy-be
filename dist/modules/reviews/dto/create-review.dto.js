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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
class CreateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => require("mongoose").Schema.Types.ObjectId }, productId: { required: true, type: () => require("mongoose").Schema.Types.ObjectId }, fileUrl: { required: false, type: () => [String] }, rating: { required: true, type: () => Number, minimum: 0, maximum: 5 }, comment: { required: true, type: () => String } };
    }
}
exports.CreateReviewDto = CreateReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '66fa38a7f037dc5950953765', description: 'userId' }),
    (0, class_validator_1.IsMongoId)({ message: "userId phải là mongo id" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId sản phẩm không được để trống', }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateReviewDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '66f3d74a9a0b38cea549a180', description: 'productId' }),
    (0, class_validator_1.IsMongoId)({ message: "productId phải là mongo id" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'productId sản phẩm không được để trống', }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateReviewDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiProperty)({ example: ['123.vn.vn', '456.abc.xyz'], description: 'fileUrl' }),
    __metadata("design:type", Array)
], CreateReviewDto.prototype, "fileUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'rating sản phẩm không được để trống', }),
    (0, class_validator_1.Min)(0, { message: 'rating phải >= 0' }),
    (0, class_validator_1.Max)(5, { message: 'rating tối đa là 5' }),
    (0, class_validator_1.IsNumber)({}, { message: 'rating phải là số nguyên', }),
    (0, swagger_1.ApiProperty)({ example: 5, description: 'rating' }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: `good products`, description: 'comment' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'comment sản phẩm không được để trống', }),
    (0, class_validator_1.IsString)({ message: "comment phải là string" }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "comment", void 0);
//# sourceMappingURL=create-review.dto.js.map