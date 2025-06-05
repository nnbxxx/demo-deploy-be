import { CreateMessageDto } from 'src/modules/message/dto/create-message.dto';
import { MessageService } from 'src/modules/message/message.service';
import { IUser } from 'src/modules/users/users.interface';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(user: IUser, createMessageDto: CreateMessageDto): Promise<void>;
    findAll(user: IUser, chatRoom: string, currentPage: number, limit: number): Promise<import("../../helpers").PaginatedResult<import("./schemas/message.schemas").Message>>;
}
