import mongoose, { HydratedDocument } from "mongoose";
export type AddressUserDocument = HydratedDocument<AddressUser>;
export declare class AddressUser {
    user: mongoose.Schema.Types.ObjectId;
    receiver: string;
    phone: string;
    province: string;
    districts: string;
    wards: string;
    specific: string;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const AddressUserSchema: mongoose.Schema<AddressUser, mongoose.Model<AddressUser, any, any, any, mongoose.Document<unknown, any, AddressUser> & AddressUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AddressUser, mongoose.Document<unknown, {}, mongoose.FlatRecord<AddressUser>> & mongoose.FlatRecord<AddressUser> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
