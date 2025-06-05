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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const message_schemas_1 = require("./schemas/message.schemas");
const helpers_1 = require("../../helpers");
const chat_room_schemas_1 = require("../chat-rooms/schemas/chat-room.schemas");
const app_gateway_1 = require("../../gateway/app.gateway");
let MessageService = class MessageService {
    constructor(messageModel, chatRoomModel, appGateway) {
        this.messageModel = messageModel;
        this.chatRoomModel = chatRoomModel;
        this.appGateway = appGateway;
    }
    async create(user, { chatRoom, messageType, content, fileUrl, questionId }) {
        await this.validateMember(user._id, chatRoom);
        const newMessage = await this.messageModel.create({
            sender: user._id,
            chatRoom,
            messageType,
            content,
            fileUrl,
        });
        await this.chatRoomModel.updateOne({ _id: chatRoom }, { lastMessage: newMessage._id });
        this.appGateway.server.emit(`chat-rooms/${chatRoom}`, {
            ...newMessage.toJSON(),
            questionId,
            sender: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }
    async findAll(user, { currentPage, limit, chatRoom }) {
        await this.validateMember(user._id, chatRoom);
        return (0, helpers_1.paginate)(this.messageModel, {
            currentPage,
            limit,
            query: { chatRoom },
            population: [{ path: 'sender', select: ['email', 'name'] }],
        });
    }
    async validateMember(userId, chatRoom) {
        const isExist = await this.chatRoomModel.exists({
            _id: chatRoom,
            members: userId,
        });
        if (!isExist) {
            throw new common_1.ForbiddenException("You're not allow to access");
        }
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(message_schemas_1.Message.name)),
    __param(1, (0, mongoose_1.InjectModel)(chat_room_schemas_1.ChatRoom.name)),
    __metadata("design:paramtypes", [Object, Object, app_gateway_1.AppGateway])
], MessageService);
//# sourceMappingURL=message.service.js.map