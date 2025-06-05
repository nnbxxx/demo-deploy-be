import { Document } from 'mongoose';
export type VectorDocument = Vector & Document;
export declare class Vector {
    text: string;
    source: string;
    embedding: number[];
}
export declare const VectorSchema: import("mongoose").Schema<Vector, import("mongoose").Model<Vector, any, any, any, Document<unknown, any, Vector> & Vector & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Vector, Document<unknown, {}, import("mongoose").FlatRecord<Vector>> & import("mongoose").FlatRecord<Vector> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
