import { IUser } from 'src/modules/users/users.interface';
import { ChatRoomsService } from './chat-rooms.service';
export declare class AdminChatRoomsController {
    private readonly ChatRoomsService;
    constructor(ChatRoomsService: ChatRoomsService);
    findAll(currentPage: number, limit: number): Promise<import("../../helpers").PaginatedResult<import("./schemas/chat-room.schemas").ChatRoom>>;
    joinRoom(user: IUser, id: string): Promise<void>;
}
