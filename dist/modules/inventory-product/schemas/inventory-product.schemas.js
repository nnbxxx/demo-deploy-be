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
exports.InventoryProductSchema = exports.InventoryProduct = exports.ProductVariant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const product_schemas_1 = require("../../products/schemas/product.schemas");
const user_schema_1 = require("../../users/schemas/user.schema");
const schema_enum_1 = require("../../../constants/schema.enum");
class ProductVariant {
}
exports.ProductVariant = ProductVariant;
__decorate([
    (0, mongoose_1.Prop)({ type: Map, of: String, required: false }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "attributes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], ProductVariant.prototype, "importPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0, min: 0, max: 100 }),
    __metadata("design:type", Number)
], ProductVariant.prototype, "exportPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], ProductVariant.prototype, "sellPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], ProductVariant.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ProductVariant.prototype, "discount", void 0);
class StockHistory {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], StockHistory.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], StockHistory.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], StockHistory.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: schema_enum_1.INVENTORY_ACTION }),
    __metadata("design:type", String)
], StockHistory.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], StockHistory.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], StockHistory.prototype, "variants", void 0);
let InventoryProduct = class InventoryProduct {
};
exports.InventoryProduct = InventoryProduct;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: product_schemas_1.Product.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], InventoryProduct.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [ProductVariant], default: [] }),
    __metadata("design:type", Array)
], InventoryProduct.prototype, "productVariants", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], InventoryProduct.prototype, "totalQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], InventoryProduct.prototype, "totalQuantitySell", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: mongoose_2.default.Schema.Types.ObjectId, required: true },
            email: { type: String, required: true }
        }
    }),
    __metadata("design:type", Object)
], InventoryProduct.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: mongoose_2.default.Schema.Types.ObjectId, required: true },
            email: { type: String, required: true }
        }
    }),
    __metadata("design:type", Object)
], InventoryProduct.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: mongoose_2.default.Schema.Types.ObjectId, required: true },
            email: { type: String, required: true }
        }
    }),
    __metadata("design:type", Object)
], InventoryProduct.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], InventoryProduct.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], InventoryProduct.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [StockHistory], default: [] }),
    __metadata("design:type", Array)
], InventoryProduct.prototype, "stockHistory", void 0);
exports.InventoryProduct = InventoryProduct = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], InventoryProduct);
exports.InventoryProductSchema = mongoose_1.SchemaFactory.createForClass(InventoryProduct);
//# sourceMappingURL=inventory-product.schemas.js.map