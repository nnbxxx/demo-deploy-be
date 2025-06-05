import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Server, Socket } from 'socket.io';
import { UsersService } from 'src/modules/users/users.service';
export declare class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly notificationsService;
    private usersService;
    server: Server;
    constructor(notificationsService: NotificationsService, usersService: UsersService);
    handleDisconnect(client: Socket): Promise<void>;
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    sendNotification(message: any, room?: string): void;
    create(createNotificationDto: CreateNotificationDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    sendNotificationToSpecificUser(createNotificationDto: CreateNotificationDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
