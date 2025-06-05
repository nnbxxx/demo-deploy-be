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
exports.AddressUserSchema = exports.AddressUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const user_schema_1 = require("../../users/schemas/user.schema");
let AddressUser = class AddressUser {
};
exports.AddressUser = AddressUser;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], AddressUser.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "receiver", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "districts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "wards", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AddressUser.prototype, "specific", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], AddressUser.prototype, "isDefault", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AddressUser.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AddressUser.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], AddressUser.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AddressUser.prototype, "deletedAt", void 0);
exports.AddressUser = AddressUser = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AddressUser);
exports.AddressUserSchema = mongoose_1.SchemaFactory.createForClass(AddressUser);
//# sourceMappingURL=address-user.schemas.js.map