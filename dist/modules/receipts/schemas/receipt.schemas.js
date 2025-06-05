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
exports.ReceiptSchema = exports.Receipt = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema_enum_1 = require("../../../constants/schema.enum");
const product_schemas_1 = require("../../products/schemas/product.schemas");
const user_schema_1 = require("../../users/schemas/user.schema");
const address_user_schemas_1 = require("../../address-user/schemas/address-user.schemas");
let Receipt = class Receipt {
};
exports.Receipt = Receipt;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Receipt.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: address_user_schemas_1.AddressUser.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Receipt.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        require: true,
        type: [{
                product: { type: mongoose_2.default.Schema.Types.ObjectId, ref: product_schemas_1.Product.name, required: true },
                quantity: { type: Number, require: true, },
                price: { type: Number, require: true, },
                color: { type: String },
                size: { type: String },
            }]
    }),
    __metadata("design:type", Array)
], Receipt.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        type: [String]
    }),
    __metadata("design:type", Array)
], Receipt.prototype, "coupons", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Receipt.prototype, "supplier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Receipt.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Receipt.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Receipt.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Receipt.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Receipt.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: schema_enum_1.RECEIPT_STATUS, default: schema_enum_1.RECEIPT_STATUS.UNCONFIRMED, required: true }),
    __metadata("design:type", String)
], Receipt.prototype, "statusUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: schema_enum_1.RECEIPT_STATUS, default: schema_enum_1.RECEIPT_STATUS.UNCONFIRMED, required: true }),
    __metadata("design:type", String)
], Receipt.prototype, "statusSupplier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: schema_enum_1.PAYMENT_METHOD, default: schema_enum_1.PAYMENT_METHOD.COD, required: true }),
    __metadata("design:type", String)
], Receipt.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Receipt.prototype, "isCheckout", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Receipt.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Receipt.prototype, "confirmationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Receipt.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Receipt.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Receipt.prototype, "deletedAt", void 0);
exports.Receipt = Receipt = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Receipt);
exports.ReceiptSchema = mongoose_1.SchemaFactory.createForClass(Receipt);
//# sourceMappingURL=receipt.schemas.js.map