import mongoose, { HydratedDocument } from "mongoose";
export type AddressDocument = HydratedDocument<Address>;
export declare class Wards {
    Id: string;
    Name: string;
    Level: string;
}
export declare class Districts {
    Id: string;
    Name: string;
    Wards: Wards[];
}
export declare class Address {
    Id: string;
    Name: string;
    Districts: Districts[];
}
export declare const AddressSchema: mongoose.Schema<Address, mongoose.Model<Address, any, any, any, mongoose.Document<unknown, any, Address> & Address & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Address, mongoose.Document<unknown, {}, mongoose.FlatRecord<Address>> & mongoose.FlatRecord<Address> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
