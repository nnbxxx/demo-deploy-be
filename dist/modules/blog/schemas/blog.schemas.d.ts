import mongoose, { HydratedDocument } from "mongoose";
export type BlogDocument = HydratedDocument<Blog>;
export declare class Blog {
    title: string;
    description: string;
    category: string;
    images: string[];
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
export declare const BlogSchema: mongoose.Schema<Blog, mongoose.Model<Blog, any, any, any, mongoose.Document<unknown, any, Blog> & Blog & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Blog, mongoose.Document<unknown, {}, mongoose.FlatRecord<Blog>> & mongoose.FlatRecord<Blog> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
