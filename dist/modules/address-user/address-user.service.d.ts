import { CreateAddressUserDto } from './dto/create-address-user.dto';
import { UpdateAddressUserDto } from './dto/update-address-user.dto';
import { AddressUser, AddressUserDocument } from './schemas/address-user.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
export declare class AddressUserService {
    private addressUserModel;
    constructor(addressUserModel: SoftDeleteModel<AddressUserDocument>);
    create(createAddressUserDto: CreateAddressUserDto, _user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
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
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findDefaultAddress(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findUserAddress(user: IUser, id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(updateAddressUserDto: UpdateAddressUserDto): Promise<mongoose.UpdateWriteOpResult>;
    updateUser(updateAddressUserDto: UpdateAddressUserDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    removeForUser(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
    updateDefaultAddressUser(id: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, AddressUser> & AddressUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
}
