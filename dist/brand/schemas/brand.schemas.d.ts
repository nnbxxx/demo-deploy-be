import mongoose, { HydratedDocument } from "mongoose";
export type BrandDocument = HydratedDocument<Brand>;
export declare class Brand {
    brand: string;
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
export declare const BrandSchema: mongoose.Schema<Brand, mongoose.Model<Brand, any, any, any, mongoose.Document<unknown, any, Brand> & Brand & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Brand, mongoose.Document<unknown, {}, mongoose.FlatRecord<Brand>> & mongoose.FlatRecord<Brand> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
