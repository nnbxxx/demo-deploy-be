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
exports.CheckValidCoupon = exports.CreateCouponDto = exports.CouponDiscount = exports.CouponPrice = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const schema_enum_1 = require("../../../constants/schema.enum");
class CouponPrice {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => Number, minimum: 1 }, pointAccept: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.CouponPrice = CouponPrice;
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], CouponPrice.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], CouponPrice.prototype, "pointAccept", void 0);
const example = {
    value: 10,
    pointAccept: 20,
};
class CouponDiscount {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => Number, minimum: 1 }, maxDiscount: { required: true, type: () => Number, minimum: 1 }, pointAccept: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.CouponDiscount = CouponDiscount;
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], CouponDiscount.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], CouponDiscount.prototype, "maxDiscount", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: 'Price phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price không được để trống', }),
    __metadata("design:type", Number)
], CouponDiscount.prototype, "pointAccept", void 0);
class CreateCouponDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String }, name: { required: true, type: () => String }, type: { required: true, type: () => String }, quantity: { required: true, type: () => Number, minimum: 1 }, couponExpired: { required: true, type: () => String }, description: { required: true, type: () => Object } };
    }
}
exports.CreateCouponDto = CreateCouponDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mã code không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'COUPOUNS01', description: 'Mã code' }),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mô tả không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'Khuyến mãi 1: giảm 10k', description: 'Mô tả tên code' }),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schema_enum_1.TYPE_COUPONS, { message: 'type coupon không được hợp lệ' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'type coupon không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'PRICE', description: 'Loại code' }),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 19, description: 'Số lượng code' }),
    (0, class_validator_1.Min)(1, { message: 'số lượng phải là số dương' }),
    (0, class_validator_1.IsNumber)({}, { message: 'số lượng phải là số nguyên', }),
    (0, class_validator_1.IsNotEmpty)({ message: 'số lượng không được để trống', }),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-10-22T14:30:00.000Z', description: 'Ngày hết hạn' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ngày hết hạn không được để trống' }),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "couponExpired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: example, description: 'Chi tiết code' }),
    (0, class_transformer_1.Type)(() => {
        return class {
        };
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateCouponDto.prototype, "description", void 0);
class CheckValidCoupon {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String } };
    }
}
exports.CheckValidCoupon = CheckValidCoupon;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mã code không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'COUPOUNS01', description: 'Mã code' }),
    __metadata("design:type", String)
], CheckValidCoupon.prototype, "code", void 0);
//# sourceMappingURL=create-coupon.dto.js.map