import mongoose, { Document as MongooseDocument, Types } from 'mongoose';
export declare class Document extends MongooseDocument {
    filename: string;
    title: string;
    chunkCount: number;
    vectorIds: Types.ObjectId[];
}
export declare const DocumentSchema: mongoose.Schema<Document, mongoose.Model<Document, any, any, any, mongoose.Document<unknown, any, Document> & Document & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Document, mongoose.Document<unknown, {}, mongoose.FlatRecord<Document>> & mongoose.FlatRecord<Document> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
