import mongoose, { HydratedDocument } from "mongoose";
export type ColorDocument = HydratedDocument<Color>;
export declare class Color {
    color: string;
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const ColorSchema: mongoose.Schema<Color, mongoose.Model<Color, any, any, any, mongoose.Document<unknown, any, Color> & Color & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Color, mongoose.Document<unknown, {}, mongoose.FlatRecord<Color>> & mongoose.FlatRecord<Color> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
