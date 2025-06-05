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
exports.UpdateBlogCategoryDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateBlogCategoryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, subject: { required: true, type: () => String } };
    }
}
exports.UpdateBlogCategoryDto = UpdateBlogCategoryDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: '_id phải có dạng là mongo id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id không được để trống' }),
    __metadata("design:type", String)
], UpdateBlogCategoryDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "tên phải là chuỗi" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'tên không được để trống' }),
    __metadata("design:type", String)
], UpdateBlogCategoryDto.prototype, "subject", void 0);
//# sourceMappingURL=update-blog-category.dto.js.map