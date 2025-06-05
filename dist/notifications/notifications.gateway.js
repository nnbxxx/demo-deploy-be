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
exports.NotificationsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const notifications_service_1 = require("./notifications.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
const socket_io_1 = require("socket.io");
const users_service_1 = require("../modules/users/users.service");
let NotificationsGateway = class NotificationsGateway {
    constructor(notificationsService, usersService) {
        this.notificationsService = notificationsService;
        this.usersService = usersService;
    }
    async handleDisconnect(client) {
        const { _id } = client.handshake.headers;
        if (_id) {
            this.usersService.updateSocketId(_id);
        }
    }
    afterInit(server) {
    }
    handleConnection(client) {
        const { _id } = client.handshake.headers;
        if (_id) {
            this.usersService.updateSocketId(_id, client.id);
        }
    }
    sendNotification(message, room = null) {
        if (room != null)
            this.server.to(room).emit('new-notification', message);
        else
            this.server.emit('new-notification', message);
    }
    create(createNotificationDto) {
        this.server.emit('receiveNotification', createNotificationDto);
        return this.notificationsService.create(createNotificationDto);
    }
    async sendNotificationToSpecificUser(createNotificationDto) {
        const { message, title, userId, navigate } = createNotificationDto;
        const user = await this.usersService.findOne(userId);
        const { socketId } = user;
        if (socketId) {
            this.server.to(socketId).emit('receiveNotification', createNotificationDto);
        }
        return this.notificationsService.create(createNotificationDto);
    }
};
exports.NotificationsGateway = NotificationsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificationsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createNotification'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendNotificationToUser'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationsGateway.prototype, "sendNotificationToSpecificUser", null);
exports.NotificationsGateway = NotificationsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(parseInt(process.env.PORT_SOCKET, 10) || 8811, {
        cors: { origin: "*" }, transports: ['websocket']
    }),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService,
        users_service_1.UsersService])
], NotificationsGateway);
//# sourceMappingURL=notifications.gateway.js.map