import { IUser } from 'src/modules/users/users.interface';
import { ChatRoomsService } from './chat-rooms.service';
export declare class ClientChatRoomsController {
    private readonly ChatRoomsService;
    constructor(ChatRoomsService: ChatRoomsService);
    clientGetChatRoom(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/chat-room.schemas").ChatRoom> & import("./schemas/chat-room.schemas").ChatRoom & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/chat-room.schemas").ChatRoom> & import("./schemas/chat-room.schemas").ChatRoom & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
