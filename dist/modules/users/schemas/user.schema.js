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
exports.UserSchema = exports.User = exports.RecentViewProduct = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema_enum_1 = require("../../../constants/schema.enum");
const coupon_schemas_1 = require("../../coupons/schemas/coupon.schemas");
const product_schemas_1 = require("../../products/schemas/product.schemas");
let RecentViewProduct = class RecentViewProduct {
};
exports.RecentViewProduct = RecentViewProduct;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: product_schemas_1.Product.name, required: true }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], RecentViewProduct.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], RecentViewProduct.prototype, "timeView", void 0);
exports.RecentViewProduct = RecentViewProduct = __decorate([
    (0, mongoose_1.Schema)()
], RecentViewProduct);
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, default: 'http://res.cloudinary.com/dyhpycx4c/image/upload/v1730186934/new-img/eh8udjbm4x4zossupogb.png' }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: schema_enum_1.TYPE_GENDER, default: schema_enum_1.TYPE_GENDER.MALE, required: true }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [mongoose_2.default.Schema.Types.ObjectId], ref: product_schemas_1.Product.name, default: [] }),
    __metadata("design:type", Array)
], User.prototype, "purchasedProducts", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [RecentViewProduct],
        default: [],
        required: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "recentViewProducts", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{
                _id: { type: mongoose_2.default.Schema.Types.ObjectId, ref: coupon_schemas_1.Coupon.name },
                isActive: { type: Boolean, required: true, default: false },
                name: { type: String, required: true },
                code: { type: String, required: true },
                couponExpired: { type: Date, required: true },
            }],
        required: true, default: []
    }),
    __metadata("design:type", Array)
], User.prototype, "couponsUser", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], User.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'user' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "point", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "LOCAL" }),
    __metadata("design:type", String)
], User.prototype, "accountType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isBlocked", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "codeId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], User.prototype, "codeExpired", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "socketId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], User.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], User.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map