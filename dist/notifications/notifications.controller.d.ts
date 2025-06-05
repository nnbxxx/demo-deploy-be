import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { IUser } from 'src/modules/users/users.interface';
import { NotificationsGateway } from './notifications.gateway';
export declare class NotificationsController {
    private readonly notificationsService;
    private readonly notificationsGateway;
    constructor(notificationsService: NotificationsService, notificationsGateway: NotificationsGateway);
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
    findAll(currentPage: string, limit: string, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(user: IUser): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    markAsRead(notificationId: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/notification.schemas").Notification> & import("./schemas/notification.schemas").Notification & {
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
    markAllAsRead(user: IUser): Promise<number>;
}
