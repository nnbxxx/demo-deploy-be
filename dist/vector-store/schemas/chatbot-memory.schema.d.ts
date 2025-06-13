import { Document } from 'mongoose';
export type ChatbotMemoryDocument = ChatbotMemory & Document;
export declare class ChatbotMemory {
    userId: string;
    conversationId: string;
    content: string;
    embedding: number[];
}
export declare const ChatbotMemorySchema: import("mongoose").Schema<ChatbotMemory, import("mongoose").Model<ChatbotMemory, any, any, any, Document<unknown, any, ChatbotMemory> & ChatbotMemory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatbotMemory, Document<unknown, {}, import("mongoose").FlatRecord<ChatbotMemory>> & import("mongoose").FlatRecord<ChatbotMemory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
