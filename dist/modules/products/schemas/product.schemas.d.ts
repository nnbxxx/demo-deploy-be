import mongoose, { HydratedDocument } from "mongoose";
export type ProductDocument = HydratedDocument<Product>;
declare class Variant {
    attributes: Record<string, any>;
}
export declare class Product {
    name: string;
    category: mongoose.Schema.Types.ObjectId;
    brand: string;
    description: string;
    images: string[];
    rating: number;
    tags: string;
    features: string;
    code: string;
    variants: Variant[];
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
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Product & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
export {};
