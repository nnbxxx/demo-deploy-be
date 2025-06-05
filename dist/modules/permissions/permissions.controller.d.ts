import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IUser } from '../users/users.interface';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    create(createPermissionDto: CreatePermissionDto, user: IUser): Promise<{
        _id: import("mongoose").Types.ObjectId;
        createdAt: Date;
    }>;
    findAll(currentPage: string, limit: string, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/permission.schemas").Permission> & import("./schemas/permission.schemas").Permission & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/permission.schemas").Permission> & import("./schemas/permission.schemas").Permission & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/permission.schemas").Permission> & import("./schemas/permission.schemas").Permission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/permission.schemas").Permission> & import("./schemas/permission.schemas").Permission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, updatePermissionDto: UpdatePermissionDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}
