import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IUser } from '../users/users.interface';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto, user: IUser): Promise<{
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
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/role.schemas").Role> & import("./schemas/role.schemas").Role & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/role.schemas").Role> & import("./schemas/role.schemas").Role & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/role.schemas").Role> & import("./schemas/role.schemas").Role & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/role.schemas").Role> & import("./schemas/role.schemas").Role & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    update(id: string, updateRoleDto: UpdateRoleDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}
