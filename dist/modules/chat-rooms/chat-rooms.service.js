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
exports.ChatRoomsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chat_room_schemas_1 = require("./schemas/chat-room.schemas");
const message_schemas_1 = require("../message/schemas/message.schemas");
const schema_enum_1 = require("../../constants/schema.enum");
const helpers_1 = require("../../helpers");
const app_gateway_1 = require("../../gateway/app.gateway");
let ChatRoomsService = class ChatRoomsService {
    constructor(chatRoomModel, messageModel, appGateway) {
        this.chatRoomModel = chatRoomModel;
        this.messageModel = messageModel;
        this.appGateway = appGateway;
    }
    generateRoomKey(userId) {
        return `GROUP_OF_${userId}`;
    }
    generateRoomName(userName) {
        return `Group of ${userName}`;
    }
    findAll({ currentPage, limit }) {
        return (0, helpers_1.paginate)(this.chatRoomModel, {
            currentPage,
            limit,
            population: [
                {
                    path: 'lastMessage',
                    populate: [{ path: 'sender', select: ['email', 'name'] }],
                },
                {
                    path: 'members',
                    select: ['email', 'name', 'avatar', 'role'],
                },
            ],
        });
    }
    async joinRoom(user, chatRoom) {
        const isExist = await this.chatRoomModel.exists({
            _id: chatRoom,
            members: user._id,
        });
        if (!isExist) {
            const newMessage = await this.messageModel.create({
                chatRoom,
                messageType: schema_enum_1.MESSAGE_TYPES.TEXT,
                content: `Admin ${user.name} đã tham gia cuộc trò chuyện`,
                isRead: true,
                isSystem: true,
            });
            await this.chatRoomModel.updateOne({ _id: chatRoom }, {
                $addToSet: { members: user._id },
                lastMessage: newMessage._id,
            });
        }
    }
    async clientGetChatRoom(user) {
        const roomKey = this.generateRoomKey(user._id);
        let chatRoom = await this.chatRoomModel.findOne({ roomKey });
        if (!chatRoom) {
            chatRoom = await this.chatRoomModel.create({
                roomKey,
                roomName: this.generateRoomName(user.name),
                members: [user._id],
            });
            const chatRoomPopulated = await chatRoom.populate('members', [
                'email',
                'name',
                'avatar',
                'role',
            ]);
            console.log(chatRoomPopulated);
            this.appGateway.server.emit(`new-chat-room`, chatRoomPopulated);
            const newMessage = await this.messageModel.create({
                chatRoom: chatRoom._id,
                messageType: schema_enum_1.MESSAGE_TYPES.TEXT,
                content: 'Xin chào! Sắc có thể hỗ trợ điều gì cho bạn?',
                isRead: true,
                isSystem: true,
            });
            await this.chatRoomModel.updateOne({ _id: chatRoom._id }, { lastMessage: newMessage._id });
        }
        return chatRoom;
    }
    findOne(id) {
        return `This action returns a #${id} chatRoom`;
    }
    remove(id) {
        return `This action removes a #${id} chatRoom`;
    }
};
exports.ChatRoomsService = ChatRoomsService;
exports.ChatRoomsService = ChatRoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chat_room_schemas_1.ChatRoom.name)),
    __param(1, (0, mongoose_1.InjectModel)(message_schemas_1.Message.name)),
    __metadata("design:paramtypes", [Object, Object, app_gateway_1.AppGateway])
], ChatRoomsService);
//# sourceMappingURL=chat-rooms.service.js.map