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
exports.NotificationSchema = exports.Notification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const user_schema_1 = require("../../modules/users/schemas/user.schema");
let Notification = class Notification {
};
exports.Notification = Notification;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notification.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: `` }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: `` }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: `https://www.google.com/` }),
    __metadata("design:type", String)
], Notification.prototype, "navigate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Notification.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Notification.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Notification.prototype, "deletedAt", void 0);
exports.Notification = Notification = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Notification);
exports.NotificationSchema = mongoose_1.SchemaFactory.createForClass(Notification);
//# sourceMappingURL=notification.schemas.js.map