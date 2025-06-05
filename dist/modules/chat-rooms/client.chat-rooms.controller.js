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
exports.ClientChatRoomsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_guard_1 = require("../../auth/passport/role.guard");
const customize_1 = require("../../decorator/customize");
const chat_rooms_service_1 = require("./chat-rooms.service");
let ClientChatRoomsController = class ClientChatRoomsController {
    constructor(ChatRoomsService) {
        this.ChatRoomsService = ChatRoomsService;
    }
    clientGetChatRoom(user) {
        return this.ChatRoomsService.clientGetChatRoom(user);
    }
};
exports.ClientChatRoomsController = ClientChatRoomsController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientChatRoomsController.prototype, "clientGetChatRoom", null);
exports.ClientChatRoomsController = ClientChatRoomsController = __decorate([
    (0, swagger_1.ApiTags)('chat-rooms'),
    (0, common_1.Controller)('client/chat-rooms'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(role_guard_1.USER_BASE_ROLES.USER),
    __metadata("design:paramtypes", [chat_rooms_service_1.ChatRoomsService])
], ClientChatRoomsController);
//# sourceMappingURL=client.chat-rooms.controller.js.map