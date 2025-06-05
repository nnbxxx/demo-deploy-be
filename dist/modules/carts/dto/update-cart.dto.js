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
exports.UpdateToCartDto = exports.CartItem = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProductAdd {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, color: { required: true, type: () => String }, size: { required: true, type: () => String }, price: { required: true, type: () => Number, minimum: 1 }, quantity: { required: true, type: () => Number, minimum: 1 } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'product_id không được để trống' }),
    __metadata("design:type", String)
], ProductAdd.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductAdd.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductAdd.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], ProductAdd.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Quantity phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Quantity phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity không được để trống', }),
    __metadata("design:type", Number)
], ProductAdd.prototype, "quantity", void 0);
class CartItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { product: { required: true, type: () => ({ _id: { required: true, type: () => String }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, color: { required: true, type: () => String }, size: { required: true, type: () => String } }) } };
    }
}
exports.CartItem = CartItem;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProductAdd),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CartItem.prototype, "product", void 0);
class UpdateToCartDto extends (0, mapped_types_1.PartialType)(CartItem) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateToCartDto = UpdateToCartDto;
//# sourceMappingURL=update-cart.dto.js.map