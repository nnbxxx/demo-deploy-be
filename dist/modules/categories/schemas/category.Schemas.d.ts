import mongoose, { HydratedDocument } from "mongoose";
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category {
    name: string;
    url: string;
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
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Category & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & mongoose.FlatRecord<Category> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
