"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chat_rooms_service_1 = require("./chat-rooms.service");
const admin_chat_rooms_controller_1 = require("./admin.chat-rooms.controller");
const client_chat_rooms_controller_1 = require("./client.chat-rooms.controller");
const chat_room_schemas_1 = require("./schemas/chat-room.schemas");
const message_schemas_1 = require("../message/schemas/message.schemas");
const gateway_module_1 = require("../../gateway/gateway.module");
let ChatRoomsModule = class ChatRoomsModule {
};
exports.ChatRoomsModule = ChatRoomsModule;
exports.ChatRoomsModule = ChatRoomsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: chat_room_schemas_1.ChatRoom.name, schema: chat_room_schemas_1.ChatRoomSchema },
                { name: message_schemas_1.Message.name, schema: message_schemas_1.MessageSchema },
            ]),
            gateway_module_1.GatewayModule,
        ],
        controllers: [admin_chat_rooms_controller_1.AdminChatRoomsController, client_chat_rooms_controller_1.ClientChatRoomsController],
        providers: [chat_rooms_service_1.ChatRoomsService],
        exports: [chat_rooms_service_1.ChatRoomsService],
    })
], ChatRoomsModule);
//# sourceMappingURL=chat-rooms.module.js.map