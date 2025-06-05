import { AddressUserService } from './address-user.service';
import { CreateAddressUserDto } from './dto/create-address-user.dto';
import { UpdateAddressUserDto } from './dto/update-address-user.dto';
import { IUser } from '../users/users.interface';
export declare class AddressUserController {
    private readonly addressUserService;
    constructor(addressUserService: AddressUserService);
    create(createAddressUserDto: CreateAddressUserDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findDefaultAddress(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAddressUserById(user: IUser, id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(updateAddressUserDto: UpdateAddressUserDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    updateAddressUser(updateAddressUserDto: UpdateAddressUserDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    updateDefaultAddress(user: IUser, id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/address-user.schemas").AddressUser> & import("./schemas/address-user.schemas").AddressUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(user: IUser, id: string): Promise<{
        deleted: number;
    }>;
}
