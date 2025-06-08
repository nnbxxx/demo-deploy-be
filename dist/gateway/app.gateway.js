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
var AppGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let AppGateway = AppGateway_1 = class AppGateway {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AppGateway_1.name);
    }
    afterInit(server) {
        this.logger.log(server, 'Init socket server');
    }
    async handleConnection(client) {
        const token = client.handshake.headers['authorization']?.replace('Bearer ', '');
        if (token) {
            try {
                const decoded = this.jwtService.verify(token);
                client.user = decoded;
            }
            catch (error) {
                console.log(error);
                client.emit('error', {
                    message: 'Unauthorized',
                });
                client.disconnect();
            }
        }
        else {
            client.emit('error', {
                message: 'Unauthorized',
            });
            client.disconnect();
        }
        this.logger.log(client.id, 'Connected..............................');
    }
    handleDisconnect(client) {
        console.log(client, 'disconnected');
    }
};
exports.AppGateway = AppGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "server", void 0);
exports.AppGateway = AppGateway = AppGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AppGateway);
//# sourceMappingURL=app.gateway.js.map