import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProfileUser, UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './users.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, user: IUser): Promise<{
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(currentPage: string, limit: string, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | "not found user">;
    findOneCoupon(id: string): Promise<{
        couponsUser: {
            _id: import("mongoose").Schema.Types.ObjectId;
            isActive: boolean;
            name: string;
            code: string;
            couponExpired: Date;
        }[];
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        name: string;
        avatar: string;
        email: string;
        password: string;
        age: number;
        gender: import("../../constants/schema.enum").TYPE_GENDER;
        address: string;
        purchasedProducts: [import("mongoose").Schema.Types.ObjectId];
        recentViewProducts: import("./schemas/user.schema").RecentViewProduct[];
        refreshToken: string;
        createdBy: {
            _id: import("mongoose").Schema.Types.ObjectId;
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
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
        };
        deletedBy: {
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
        };
        createdAt: Date;
        updatedAt: Date;
        isDeleted: boolean;
        deletedAt: Date;
        __v?: number;
    }>;
    update(updateUserDto: UpdateUserDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    updateProfileUser(updateUserDto: UpdateProfileUser, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    updateRole(id: string, role: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    blockUser(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    } | "not found user">;
}
