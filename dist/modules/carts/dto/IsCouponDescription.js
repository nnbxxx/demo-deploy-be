"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCouponDescription = void 0;
const class_validator_1 = require("class-validator");
const create_coupon_dto_1 = require("../../coupons/dto/create-coupon.dto");
let IsCouponDescription = class IsCouponDescription {
    validate(description, args) {
        return description instanceof create_coupon_dto_1.CouponPrice || description instanceof create_coupon_dto_1.CouponDiscount;
    }
    defaultMessage(args) {
        return 'Description must be an instance of CouponPrice or CouponDiscount';
    }
};
exports.IsCouponDescription = IsCouponDescription;
exports.IsCouponDescription = IsCouponDescription = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsCouponDescription', async: false })
], IsCouponDescription);
//# sourceMappingURL=IsCouponDescription.js.map