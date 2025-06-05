import mongoose, { HydratedDocument } from 'mongoose';
export type ChatRoomDocument = HydratedDocument<ChatRoom>;
export declare class ChatRoom {
    roomKey: string;
    roomName: string;
    members: [mongoose.Schema.Types.ObjectId];
    lastMessage: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const ChatRoomSchema: mongoose.Schema<ChatRoom, mongoose.Model<ChatRoom, any, any, any, mongoose.Document<unknown, any, ChatRoom> & ChatRoom & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ChatRoom, mongoose.Document<unknown, {}, mongoose.FlatRecord<ChatRoom>> & mongoose.FlatRecord<ChatRoom> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
