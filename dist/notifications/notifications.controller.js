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
exports.NotificationsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const customize_1 = require("../decorator/customize");
const swagger_1 = require("@nestjs/swagger");
const notifications_service_1 = require("./notifications.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
const notifications_gateway_1 = require("./notifications.gateway");
let NotificationsController = class NotificationsController {
    constructor(notificationsService, notificationsGateway) {
        this.notificationsService = notificationsService;
        this.notificationsGateway = notificationsGateway;
    }
    async create(createNotificationDto) {
        this.notificationsGateway.sendNotification(createNotificationDto);
        return await this.notificationsService.create(createNotificationDto);
    }
    findAll(currentPage, limit, qs) {
        return this.notificationsService.findAll(+currentPage, +limit, qs);
    }
    async findOne(user) {
        return await this.notificationsService.getNotificationsByUser(user._id);
    }
    async markAsRead(notificationId, user) {
        return await this.notificationsService.markAsRead(notificationId, user);
    }
    async markAllAsRead(user) {
        return await this.notificationsService.markAllAsRead(user);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Post)(),
    (0, customize_1.ResponseMessage)("Create a new Notification"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch Notification with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/user'),
    (0, customize_1.ResponseMessage)("Fetch Notification by user id"),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('mark-as-read/:notificationId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('notificationId')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Post)('mark-all-as-read'),
    openapi.ApiResponse({ status: 201, type: Number }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "markAllAsRead", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, swagger_1.ApiTags)('notifications'),
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService,
        notifications_gateway_1.NotificationsGateway])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map