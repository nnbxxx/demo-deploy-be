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
exports.LikeProductSchema = exports.LikeProduct = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const product_schemas_1 = require("../../products/schemas/product.schemas");
const user_schema_1 = require("../../users/schemas/user.schema");
let LikeProduct = class LikeProduct {
};
exports.LikeProduct = LikeProduct;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], LikeProduct.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: product_schemas_1.Product.name, required: true }],
    }),
    __metadata("design:type", Array)
], LikeProduct.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], LikeProduct.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], LikeProduct.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], LikeProduct.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], LikeProduct.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], LikeProduct.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], LikeProduct.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], LikeProduct.prototype, "deletedAt", void 0);
exports.LikeProduct = LikeProduct = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], LikeProduct);
exports.LikeProductSchema = mongoose_1.SchemaFactory.createForClass(LikeProduct);
//# sourceMappingURL=like-product.schemas.js.map