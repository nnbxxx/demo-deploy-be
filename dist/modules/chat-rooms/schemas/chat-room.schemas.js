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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomSchema = exports.ChatRoom = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
let ChatRoom = class ChatRoom {
};
exports.ChatRoom = ChatRoom;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], ChatRoom.prototype, "roomKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ChatRoom.prototype, "roomName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [mongoose_2.default.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", Array)
], ChatRoom.prototype, "members", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Message',
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], ChatRoom.prototype, "lastMessage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ChatRoom.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ChatRoom.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ChatRoom.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ChatRoom.prototype, "deletedAt", void 0);
exports.ChatRoom = ChatRoom = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ChatRoom);
exports.ChatRoomSchema = mongoose_1.SchemaFactory.createForClass(ChatRoom);
//# sourceMappingURL=chat-room.schemas.js.map