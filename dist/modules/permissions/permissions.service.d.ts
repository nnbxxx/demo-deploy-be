import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission, PermissionDocument } from './schemas/permission.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
export declare class PermissionsService {
    private permissionModel;
    constructor(permissionModel: SoftDeleteModel<PermissionDocument>);
    create(createPermissionDto: CreatePermissionDto, user: IUser): Promise<{
        _id: mongoose.Types.ObjectId;
        createdAt: Date;
    }>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Permission> & Permission & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Permission> & Permission & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Permission> & Permission & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Permission> & Permission & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(_id: string, updatePermissionDto: UpdatePermissionDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}
