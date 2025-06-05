import mongoose, { HydratedDocument, Types } from "mongoose";
import { CartItem } from "../dto/update-cart.dto";
export type CartDocument = HydratedDocument<Cart>;
export declare class Cart {
    user: mongoose.Schema.Types.ObjectId;
    items: CartItem[];
    total: number;
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
export declare const CartSchema: mongoose.Schema<Cart, mongoose.Model<Cart, any, any, any, mongoose.Document<unknown, any, Cart> & Cart & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Cart, mongoose.Document<unknown, {}, mongoose.FlatRecord<Cart>> & mongoose.FlatRecord<Cart> & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}>;
