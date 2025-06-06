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
exports.CreateMessageDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const schema_enum_1 = require("../../../constants/schema.enum");
class CreateMessageDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { content: { required: true, type: () => String }, chatRoom: { required: true, type: () => String }, fileUrl: { required: true, type: () => [String] }, messageType: { required: true, type: () => String }, questionId: { required: true, type: () => Number } };
    }
}
exports.CreateMessageDto = CreateMessageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "chatRoom", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateMessageDto.prototype, "fileUrl", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schema_enum_1.MESSAGE_TYPES),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "messageType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMessageDto.prototype, "questionId", void 0);
//# sourceMappingURL=create-message.dto.js.map