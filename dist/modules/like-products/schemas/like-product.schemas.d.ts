import mongoose, { HydratedDocument } from "mongoose";
export type LikeProductDocument = HydratedDocument<LikeProduct>;
export declare class LikeProduct {
    user: mongoose.Schema.Types.ObjectId;
    items: mongoose.Schema.Types.ObjectId[];
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
export declare const LikeProductSchema: mongoose.Schema<LikeProduct, mongoose.Model<LikeProduct, any, any, any, mongoose.Document<unknown, any, LikeProduct> & LikeProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, LikeProduct, mongoose.Document<unknown, {}, mongoose.FlatRecord<LikeProduct>> & mongoose.FlatRecord<LikeProduct> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
