import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { ProfileUserDto, UpdateProfileUser, UpdateUserDto } from './dto/update-user.dto';
import { User as UserM, UserDocument } from './schemas/user.schema';
import mongoose from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import { MailerService } from '@nestjs-modules/mailer';
import { ChangePasswordAuthDto, CodeAuthDto } from 'src/auth/dto/create-auth.dto';
export declare class UsersService {
    private userModel;
    private readonly mailerService;
    constructor(userModel: SoftDeleteModel<UserDocument>, mailerService: MailerService);
    getHashPassword: (password: string) => string;
    create(createUserDto: CreateUserDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    register(user: RegisterUserDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, UserM> & UserM & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>) | "not found user">;
    findOneCoupon(id: string): Promise<{
        couponsUser: {
            _id: mongoose.Schema.Types.ObjectId;
            isActive: boolean;
            name: string;
            code: string;
            couponExpired: Date;
        }[];
        _id: mongoose.Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: mongoose.Collection;
        db: mongoose.Connection;
        errors?: mongoose.Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: mongoose.Schema;
        name: string;
        avatar: string;
        email: string;
        password: string;
        age: number;
        gender: import("src/constants/schema.enum").TYPE_GENDER;
        address: string;
        purchasedProducts: [mongoose.Schema.Types.ObjectId];
        recentViewProducts: import("./schemas/user.schema").RecentViewProduct[];
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
        __v?: number;
    }>;
    findOneByUsername(username: string): mongoose.Query<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }, "findOne", {}>;
    isValidPassword(password: string, hash: string): boolean;
    update(updateUserDto: UpdateUserDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    } | "not found user">;
    updateUserToken: (refreshToken: string, _id: string, isActive?: boolean) => Promise<mongoose.UpdateWriteOpResult>;
    findUserByToken: (refreshToken: string) => Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    handleActive(data: CodeAuthDto): Promise<{
        isBeforeCheck: true;
    }>;
    retryActive(email: string): Promise<{
        _id: mongoose.Types.ObjectId;
    }>;
    retryPassword(email: string): Promise<{
        _id: mongoose.Types.ObjectId;
        email: string;
    }>;
    changePassword(data: ChangePasswordAuthDto): Promise<{
        isBeforeCheck: true;
    }>;
    updateProfile(userDto: ProfileUserDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    updatePurchasedProducts(userId: string, productIds: string[], point: number): Promise<void>;
    updateRecentViewProduct(user: IUser, productId: string): Promise<void>;
    checkPurchasedProduct(userId: string, productId: string): Promise<boolean>;
    updateSocketId(userId: string, socketId?: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    getAllUserAcceptPoint(point: number, couponId: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    updateUserNewCoupons(userId: string, coupon: {
        _id: string;
        name: string;
        code: string;
        couponExpired: Date;
    }): Promise<void>;
    checkConnectSocketIo(userId: string): Promise<any>;
    checkIsActiveCode(userId: string, couponId: string, active?: boolean): Promise<void>;
    updateUserProfile(user: IUser, data: UpdateProfileUser): Promise<mongoose.UpdateWriteOpResult>;
    updateUserRole(id: string, role: any): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    blockUser(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, UserM> & UserM & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
}
