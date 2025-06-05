import { CreateNotificationDto } from './dto/create-notification.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Notification, NotificationDocument } from './schemas/notification.schemas';
import mongoose from 'mongoose';
import { IUser } from 'src/modules/users/users.interface';
export declare class NotificationsService {
    private notificationModel;
    constructor(notificationModel: SoftDeleteModel<NotificationDocument>);
    create(createNotificationDto: CreateNotificationDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    getNotificationsByUser(userId: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    markAsRead(notificationId: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Notification> & Notification & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    markAllAsRead(user: IUser): Promise<number>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Notification> & Notification & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Notification> & Notification & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
}
