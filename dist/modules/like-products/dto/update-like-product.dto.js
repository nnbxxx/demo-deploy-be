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
exports.AddLikeProductDto = exports.UpdateLikeProductDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_like_product_dto_1 = require("./create-like-product.dto");
const class_validator_1 = require("class-validator");
class UpdateLikeProductDto extends (0, mapped_types_1.PartialType)(create_like_product_dto_1.CreateLikeProductDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateLikeProductDto = UpdateLikeProductDto;
class AddLikeProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String } };
    }
}
exports.AddLikeProductDto = AddLikeProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'product không được để trống' }),
    __metadata("design:type", String)
], AddLikeProductDto.prototype, "_id", void 0);
//# sourceMappingURL=update-like-product.dto.js.map