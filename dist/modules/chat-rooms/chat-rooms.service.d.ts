import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { ChatRoom, ChatRoomDocument } from 'src/modules/chat-rooms/schemas/chat-room.schemas';
import { IUser } from 'src/modules/users/users.interface';
import { MessageDocument } from 'src/modules/message/schemas/message.schemas';
import { AppGateway } from 'src/gateway/app.gateway';
export declare class ChatRoomsService {
    private chatRoomModel;
    private messageModel;
    private readonly appGateway;
    constructor(chatRoomModel: SoftDeleteModel<ChatRoomDocument>, messageModel: SoftDeleteModel<MessageDocument>, appGateway: AppGateway);
    private generateRoomKey;
    private generateRoomName;
    findAll({ currentPage, limit }: {
        currentPage: any;
        limit: any;
    }): Promise<import("src/helpers").PaginatedResult<ChatRoom>>;
    joinRoom(user: IUser, chatRoom: string): Promise<void>;
    clientGetChatRoom(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, ChatRoom> & ChatRoom & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, ChatRoom> & ChatRoom & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findOne(id: number): string;
    remove(id: number): string;
}
