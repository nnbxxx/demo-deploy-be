import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/modules/users/users.interface';
import { ChatRoomDocument } from 'src/modules/chat-rooms/schemas/chat-room.schemas';
import { AppGateway } from 'src/gateway/app.gateway';
export declare class MessageService {
    private messageModel;
    private chatRoomModel;
    private readonly appGateway;
    constructor(messageModel: SoftDeleteModel<MessageDocument>, chatRoomModel: SoftDeleteModel<ChatRoomDocument>, appGateway: AppGateway);
    create(user: IUser, { chatRoom, messageType, content, fileUrl, questionId }: CreateMessageDto): Promise<void>;
    findAll(user: IUser, { currentPage, limit, chatRoom }: {
        currentPage: any;
        limit: any;
        chatRoom: any;
    }): Promise<import("src/helpers").PaginatedResult<Message>>;
    private validateMember;
}
