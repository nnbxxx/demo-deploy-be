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
exports.CreateNotificationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
class CreateNotificationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => require("mongoose").Schema.Types.ObjectId }, title: { required: true, type: () => String }, message: { required: true, type: () => String }, navigate: { required: true, type: () => String } };
    }
}
exports.CreateNotificationDto = CreateNotificationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '66fa38a7f037dc5950953765', description: 'userId' }),
    (0, class_validator_1.IsMongoId)({ message: "Category phải là mongo id" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category sản phẩm không được để trống', }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateNotificationDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'thông báo abc xyz', description: 'title' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title không được để trống', }),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tin nhắn abc xyz abc xyz', description: 'message' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Message không được để trống', }),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://www.google.com/', description: 'navigate' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Message không được để trống', }),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "navigate", void 0);
//# sourceMappingURL=create-notification.dto.js.map