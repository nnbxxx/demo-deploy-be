import mongoose, { HydratedDocument, Types } from "mongoose";
import { PAYMENT_METHOD, RECEIPT_STATUS } from "src/constants/schema.enum";
export type ReceiptDocument = HydratedDocument<Receipt>;
export declare class Receipt {
    user: mongoose.Schema.Types.ObjectId;
    address: mongoose.Schema.Types.ObjectId;
    items: [];
    coupons: string[];
    supplier: string;
    total: number;
    notes: string;
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
    statusUser: RECEIPT_STATUS;
    statusSupplier: RECEIPT_STATUS;
    paymentMethod: PAYMENT_METHOD;
    isCheckout: boolean;
    createdAt: Date;
    confirmationDate: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const ReceiptSchema: mongoose.Schema<Receipt, mongoose.Model<Receipt, any, any, any, mongoose.Document<unknown, any, Receipt> & Receipt & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Receipt, mongoose.Document<unknown, {}, mongoose.FlatRecord<Receipt>> & mongoose.FlatRecord<Receipt> & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}>;
