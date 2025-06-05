import mongoose, { HydratedDocument } from 'mongoose';
export type MessageDocument = HydratedDocument<Message>;
export declare class Message {
    sender: mongoose.Schema.Types.ObjectId;
    chatRoom: mongoose.Schema.Types.ObjectId;
    messageType: string;
    content: string;
    fileUrl: [string];
    isRead: boolean;
    isSystem: boolean;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const MessageSchema: mongoose.Schema<Message, mongoose.Model<Message, any, any, any, mongoose.Document<unknown, any, Message> & Message & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Message, mongoose.Document<unknown, {}, mongoose.FlatRecord<Message>> & mongoose.FlatRecord<Message> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
