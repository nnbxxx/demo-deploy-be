import mongoose, { HydratedDocument } from "mongoose";
import { INVENTORY_ACTION } from "src/constants/schema.enum";
export type InventoryProductDocument = HydratedDocument<InventoryProduct>;
export declare class ProductVariant {
    attributes: Record<string, any>;
    importPrice: number;
    exportPrice: number;
    sellPrice: number;
    stock: number;
    discount: number;
}
declare class StockHistory {
    userId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    price: number;
    action: INVENTORY_ACTION;
    date: Date;
    variants: any;
}
export declare class InventoryProduct {
    productId: mongoose.Schema.Types.ObjectId;
    productVariants: ProductVariant[];
    totalQuantity: number;
    totalQuantitySell: number;
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
    stockHistory: StockHistory[];
}
export declare const InventoryProductSchema: mongoose.Schema<InventoryProduct, mongoose.Model<InventoryProduct, any, any, any, mongoose.Document<unknown, any, InventoryProduct> & InventoryProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, InventoryProduct, mongoose.Document<unknown, {}, mongoose.FlatRecord<InventoryProduct>> & mongoose.FlatRecord<InventoryProduct> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
export {};
