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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
const create_message_dto_1 = require("./dto/create-message.dto");
const message_service_1 = require("./message.service");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    create(user, createMessageDto) {
        return this.messageService.create(user, createMessageDto);
    }
    findAll(user, chatRoom, currentPage, limit) {
        if (!chatRoom) {
            throw new common_1.UnprocessableEntityException('chatRoom is required');
        }
        return this.messageService.findAll(user, {
            chatRoom,
            currentPage,
            limit,
        });
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)(),
    (0, customize_1.ResponseMessage)('Create message success'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)('List all messages success'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Query)('chatRoom')),
    __param(2, (0, common_1.Query)('currentPage')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findAll", null);
exports.MessageController = MessageController = __decorate([
    (0, swagger_1.ApiTags)('message'),
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map