import mongoose, { HydratedDocument } from "mongoose";
export type BlogCategoryDocument = HydratedDocument<BlogCategory>;
export declare class BlogCategory {
    subject: string;
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
export declare const BlogCategorySchema: mongoose.Schema<BlogCategory, mongoose.Model<BlogCategory, any, any, any, mongoose.Document<unknown, any, BlogCategory> & BlogCategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, BlogCategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<BlogCategory>> & mongoose.FlatRecord<BlogCategory> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
