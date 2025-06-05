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
exports.CouponSchema = exports.Coupon = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_enum_1 = require("../../../constants/schema.enum");
let Coupon = class Coupon {
};
exports.Coupon = Coupon;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: schema_enum_1.TYPE_COUPONS, required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], Coupon.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now, type: Date }),
    __metadata("design:type", Date)
], Coupon.prototype, "couponExpired", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], type: (Array) }),
    __metadata("design:type", Array)
], Coupon.prototype, "reservations", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Coupon.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Coupon.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, required: true }),
    __metadata("design:type", Object)
], Coupon.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Coupon.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Coupon.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Coupon.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Coupon.prototype, "deletedAt", void 0);
exports.Coupon = Coupon = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Coupon);
exports.CouponSchema = mongoose_1.SchemaFactory.createForClass(Coupon);
//# sourceMappingURL=coupon.schemas.js.map