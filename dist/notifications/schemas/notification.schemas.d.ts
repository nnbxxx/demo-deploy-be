import mongoose, { HydratedDocument } from "mongoose";
export type NotificationDocument = HydratedDocument<Notification>;
export declare class Notification {
    userId: mongoose.Schema.Types.ObjectId;
    title: string;
    message: string;
    isRead: boolean;
    navigate: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const NotificationSchema: mongoose.Schema<Notification, mongoose.Model<Notification, any, any, any, mongoose.Document<unknown, any, Notification> & Notification & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Notification, mongoose.Document<unknown, {}, mongoose.FlatRecord<Notification>> & mongoose.FlatRecord<Notification> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
