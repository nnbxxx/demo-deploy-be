import mongoose, { HydratedDocument } from "mongoose";
export type ReviewDocument = HydratedDocument<Review>;
export declare class Review {
    userId: mongoose.Schema.Types.ObjectId;
    productId: mongoose.Schema.Types.ObjectId;
    fileUrl?: [string];
    rating: number;
    comment: string;
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
export declare const ReviewSchema: mongoose.Schema<Review, mongoose.Model<Review, any, any, any, mongoose.Document<unknown, any, Review> & Review & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Review, mongoose.Document<unknown, {}, mongoose.FlatRecord<Review>> & mongoose.FlatRecord<Review> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
