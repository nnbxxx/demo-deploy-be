import { Document as MongooseDocument } from 'mongoose';
export declare class VectorDocument extends MongooseDocument {
    content: string;
    embedding: number[];
    metadata: {
        filename: string;
        title: string;
    };
}
export declare const VectorSchema: import("mongoose").Schema<VectorDocument, import("mongoose").Model<VectorDocument, any, any, any, MongooseDocument<unknown, any, VectorDocument> & VectorDocument & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, VectorDocument, MongooseDocument<unknown, {}, import("mongoose").FlatRecord<VectorDocument>> & import("mongoose").FlatRecord<VectorDocument> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
