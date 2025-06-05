import mongoose, { HydratedDocument } from 'mongoose';
import { TYPE_GENDER } from 'src/constants/schema.enum';
export type UserDocument = HydratedDocument<User>;
export declare class RecentViewProduct {
    productId: mongoose.Schema.Types.ObjectId;
    timeView: Date;
}
export declare class User {
    name: string;
    avatar: string;
    email: string;
    password: string;
    age: number;
    gender: TYPE_GENDER;
    address: string;
    purchasedProducts: [mongoose.Schema.Types.ObjectId];
    recentViewProducts: RecentViewProduct[];
    couponsUser: [
        {
            _id: mongoose.Schema.Types.ObjectId;
            isActive: boolean;
            name: string;
            code: string;
            couponExpired: Date;
        }
    ];
    refreshToken: string;
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    image: string;
    role: string;
    point: number;
    accountType: string;
    isActive: boolean;
    isBlocked: boolean;
    codeId: string;
    codeExpired: Date;
    socketId: string;
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
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
