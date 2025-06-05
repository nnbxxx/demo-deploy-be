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
exports.AdminChatRoomsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const chat_rooms_service_1 = require("./chat-rooms.service");
const role_guard_1 = require("../../auth/passport/role.guard");
const customize_1 = require("../../decorator/customize");
let AdminChatRoomsController = class AdminChatRoomsController {
    constructor(ChatRoomsService) {
        this.ChatRoomsService = ChatRoomsService;
    }
    findAll(currentPage, limit) {
        return this.ChatRoomsService.findAll({ currentPage, limit });
    }
    joinRoom(user, id) {
        return this.ChatRoomsService.joinRoom(user, id);
    }
};
exports.AdminChatRoomsController = AdminChatRoomsController;
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)('List all rooms success'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('currentPage')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AdminChatRoomsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id/join'),
    (0, customize_1.ResponseMessage)('Join room success'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AdminChatRoomsController.prototype, "joinRoom", null);
exports.AdminChatRoomsController = AdminChatRoomsController = __decorate([
    (0, swagger_1.ApiTags)('chat-rooms'),
    (0, common_1.Controller)('admin/chat-rooms'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(role_guard_1.USER_BASE_ROLES.ADMIN),
    __metadata("design:paramtypes", [chat_rooms_service_1.ChatRoomsService])
], AdminChatRoomsController);
//# sourceMappingURL=admin.chat-rooms.controller.js.map