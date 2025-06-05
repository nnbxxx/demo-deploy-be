import mongoose, { HydratedDocument } from 'mongoose';
import { Permission } from 'src/modules/permissions/schemas/permission.schemas';
export type RoleDocument = HydratedDocument<Role>;
export declare class Role {
    name: string;
    description: string;
    isActive: boolean;
    permissions: Permission[];
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
export declare const RoleSchema: mongoose.Schema<Role, mongoose.Model<Role, any, any, any, mongoose.Document<unknown, any, Role> & Role & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Role, mongoose.Document<unknown, {}, mongoose.FlatRecord<Role>> & mongoose.FlatRecord<Role> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
