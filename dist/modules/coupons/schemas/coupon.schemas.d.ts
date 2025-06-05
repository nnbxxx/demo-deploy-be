import mongoose, { HydratedDocument } from "mongoose";
import { TYPE_COUPONS } from "src/constants/schema.enum";
import { CouponPrice, CouponDiscount } from '../dto/create-coupon.dto';
export type CouponDocument = HydratedDocument<Coupon>;
export declare class Coupon {
    code: string;
    name: string;
    type: TYPE_COUPONS;
    quantity: number;
    isActive: boolean;
    couponExpired: Date;
    reservations: [
        {
            _id: mongoose.Schema.Types.ObjectId;
            value: number;
        }
    ];
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    description: CouponPrice | CouponDiscount;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const CouponSchema: mongoose.Schema<Coupon, mongoose.Model<Coupon, any, any, any, mongoose.Document<unknown, any, Coupon> & Coupon & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Coupon, mongoose.Document<unknown, {}, mongoose.FlatRecord<Coupon>> & mongoose.FlatRecord<Coupon> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
